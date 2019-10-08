import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoDescripcion } from '../interfaces/producto-descripcion.interface';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  cargando = true;
  productoDedc: ProductoDescripcion[] = [];


  constructor( private http: HttpClient ) {

  }



  getProducto( id: string ) {
    return new Promise(  ( resolve, reject ) => {

    this.http.get('https://ovgsoft.com/api/peluchesDetalle.php?id=' + id)
          .subscribe( (resp: ProductoDescripcion[]) => {
            this.productoDedc = resp;
            console.log(resp);
            this.cargando = false;
            resolve();
          });
        });
  }



}
