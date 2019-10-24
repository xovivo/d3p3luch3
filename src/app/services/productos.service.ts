import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { PeluchesModel } from '../models/peluches.component';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private url = 'https://sirenalive-5438a.firebaseio.com';
  cargando = true;
  productos: PeluchesModel;
  productosFiltrado: Producto[] = [];
  data: Producto[] = [];
  constructor( private http: HttpClient) {

    this.cargarProductos();


  }


  private cargarProductos() {

    return new Promise(  ( resolve ) => {
      this.http.get('https://ovgsoft.com/api/peluches.php')
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
      this.cargarProductos().then( () => {
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

      if ( prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0  ) {
        this.productosFiltrado.push( prod );
      }

    });


  }

  crearHeroe( peluche: PeluchesModel) {

    return this.http.post(`${ this.url }/pedidos.json`, peluche);
  }


}
