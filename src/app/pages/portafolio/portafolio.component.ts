import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { PeluchesModel } from '../../models/peluches.component';
import { Producto } from 'src/app/interfaces/producto.interface';
@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {
  id: string;
  cargando = false;
  pelu: PeluchesModel;
  peluche: PeluchesModel;
  producto: Producto;
  p = 1;

  peluches: PeluchesModel = new PeluchesModel();

  constructor( public productosService: ProductosService ) { }





    ngOnInit() {
    }
}
