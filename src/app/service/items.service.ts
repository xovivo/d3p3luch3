import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
import { PeluchesModel } from '../models/peluches.component';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  cargando = true;
  productoDedc: PeluchesModel;
  total_carrito = 100;
private url = 'https://sirenalive-5438a.firebaseio.com';


  constructor( private http: HttpClient ) {
    this.cargarCarrrito();
  }



  private cargarCarrrito() {

    return new Promise(  ( resolve ) => {
      this.http.get(this.newMethod())
          .subscribe( (resp: PeluchesModel) => {
            this.productoDedc = resp;
            localStorage.setItem('items', JSON.stringify( resp ) );
            this.cargando = false;
            this.actualizar_total();
            resolve();
          });

    });

  }



  private newMethod(): string {
    return 'https://sirenalive-5438a.firebaseio.com/pedidos.json';
  }


  getHeroe( id: string ) {

    return this.http.get(`${ this.url }/pedidos/${ id }.json`);

  }
  getHeroes() {
    return this.http.get(`${ this.url }/pedidos.json`)
            .pipe(
              map( this.crearArreglo ),
              delay(0)
            );
  }

  private crearArreglo( heroesObj: object ) {

    const heroes: PeluchesModel[] = [];

    Object.keys( heroesObj ).forEach( key => {

      const heroe: PeluchesModel = heroesObj[key];
      heroe.id_pel = key;

      heroes.push( heroe );
    });


    return heroes;

  }


  actualizar_total() {

    this.total_carrito = 0;

    for( const item of this.productoDedc.precio ){
      this.total_carrito += Number( item );
    }


  }
}
