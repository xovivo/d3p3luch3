import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';
import { ItemsService } from 'src/app/service/items.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  peluchu: ProductoDescripcion;
  id: string;
  titulo: string;
  portada: string;
    productoDedc: ProductoDescripcion;

  constructor( private route: ActivatedRoute,
               private itemService: ItemsService ) { }

  ngOnInit() {

  this.route.params
  .subscribe( params => {
     console.log(params['id']);
    this.itemService.getProducto(params['id'])
          .subscribe( (peluchu: ProductoDescripcion) => {
           this.id = params['id'];
           this.titulo = params['titulo'];
           this.portada = params['portada'];
            this.productoDedc = peluchu;
          });
  });
}
}

