import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {
  dato: { id: string; portada: string;  titulo: string };

  constructor( public productosService: ProductosService,
    private rutaActiva: ActivatedRoute ) { }





    ngOnInit() {


    // tslint:disable-next-line: no-unused-expression

    this.dato = {
      id: this.rutaActiva.snapshot.params.id,
      portada: this.rutaActiva.snapshot.params.portada,
      titulo: this.rutaActiva.snapshot.params.titulo
    };
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.dato.id = params.id;
        this.dato.portada = params.portada;
        this.dato.titulo = params.titulo;
      }
    );
  }



  }


