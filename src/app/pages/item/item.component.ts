import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  peluchu: ProductoDescripcion;
  id: string;
    productoDedc: ProductoDescripcion;

  constructor( private route: ActivatedRoute,
              public productoService: ProductosService ) { }

              ngOnInit() {

                this.route.params
                    .subscribe( parametros => {
                      // console.log(parametros['id']);
                      this.productoService.getProducto(parametros['id'])
                            .subscribe( (producto: ProductoDescripcion) => {
                              this.id = parametros['id'];
                              this.peluchu = producto;
                            });
                    });


              }

}

