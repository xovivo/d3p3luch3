import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { ProductosService } from './services/productos.service';
import { PaisesService } from './services/paises.service';
import { Producto } from './interfaces/producto.interface';
import { ItemsService } from './service/items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productos: Producto[] = [];
  constructor( public infoPaginaService: InfoPaginaService,
               public productosService: ProductosService,
               public paisesService: PaisesService,
               public itemService: ItemsService ) {
  }

}
