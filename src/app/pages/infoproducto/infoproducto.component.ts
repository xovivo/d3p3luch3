import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-infoproducto',
  templateUrl: './infoproducto.component.html',
  styleUrls: ['./infoproducto.component.css']
})
export class InfoproductoComponent implements OnInit {
  dato: { id: string; portada: string;  titulo: string };

  constructor( public prodService: ProductosService,
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


