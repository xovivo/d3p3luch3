import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { PeluchesModel } from '../models/peluches.component';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private url = 'https://sirenalive-5438a.firebaseio.com/';
  private urlphp = 'https://ovgsoft.com/api';
  cargando = true;
  productos: PeluchesModel;
  productosFiltrado: PeluchesModel[] = [];
  data: PeluchesModel[] = [];
  constructor( private http: HttpClient) {

    this.cargarProductos();


  }


  private cargarProductos() {

    return new Promise(  ( resolve ) => {
      this.http.get(`${this.urlphp}/prueba.php`)
          .subscribe( (resp: PeluchesModel)  => {
            this.productos = resp;
            this.cargando = false;
            resolve();
          });

    });

  }

  private cargarProductoBuscar() {

    return new Promise(  ( resolve ) => {
      this.http.get(`${this.url}peluches.json`)
          .subscribe( (resp: PeluchesModel) => {
            this.productos = resp;
            this.cargando = false;
            resolve();
          });

    });

  }


  getProducto( id: string ) {

    return this.http.get(`https://sirenalive-5438a.firebaseio.com/peluches/${ id}.json`);

  }

  buscarProducto( termino: string ) {


    if ( this.productosFiltrado.length === 0 ) {
      // cargar productos
      this.cargarProductoBuscar().then( () => {
        // ejecutar después de tener los productos
        // Aplicar filtro
        this.filtrarProductos( termino );
      });

    } else {
      // aplicar el filtro
      this.filtrarProductos( termino );
    }


  }

  private filtrarProductos( termino: string ) {

    // console.log(this.productos);
    this.productosFiltrado = [];

    termino = termino.toLocaleLowerCase();

    this.productosFiltrado.forEach( prod => {

      const tituloLower = prod.titulo.toLocaleLowerCase();

      if ( prod.descripcion.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0  ) {
        this.productosFiltrado.push( prod );
      }

    });


  }

  crearHeroe( peluche: PeluchesModel) {

    const string = localStorage.getItem('us');
    return this.http.post(`${ this.url + string}.json`, peluche);
  }



}
