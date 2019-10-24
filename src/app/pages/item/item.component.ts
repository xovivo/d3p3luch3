import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';
import { ProductosService } from 'src/app/services/productos.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { PeluchesModel } from 'src/app/models/peluches.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  peluchu: PeluchesModel = new PeluchesModel();
  id_pel: string;
  productoDedc: ProductoDescripcion;

  pel: PeluchesModel = new PeluchesModel();
  constructor( private route: ActivatedRoute,
              public productoService: ProductosService ) { }

              ngOnInit() {

                const id = this.route.snapshot.paramMap.get('id_pel');

                if ( id !== 'nuevo' ) {

                  this.productoService.getProducto( id )
                    .subscribe( (resp: PeluchesModel) => {
                      this.peluchu = resp;
                      this.peluchu.id_pel = id;
                    });
                }


              }

              guardar( form: NgForm ) {

                if ( form.invalid ) {
                  console.log('Formulario no válido');
                  return;
                }
                Swal.fire({
                  title: 'Espere',
                  text: 'Guardando información',
                  type: 'info',
                  allowOutsideClick: false
                });
                Swal.showLoading();
                let peticion: Observable<any>;
                if ( this.peluchu.id_pel ) {
                  peticion = this.productoService.crearHeroe( this.peluchu );
                }
                peticion.subscribe( resp => {
                  Swal.fire({
                    title: this.peluchu.titulo,
                    text: 'Se actualizó correctamente',
                    type: 'success'
                  });
                });
              }

}

