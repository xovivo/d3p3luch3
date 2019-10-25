import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/service/items.service';
import { PeluchesModel } from 'src/app/models/peluches.component';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {
  producto: PeluchesModel[] = [];
  cargando = false;

  constructor(
    public itemsS: ItemsService
  ) { }

  ngOnInit() {
    this.cargando = true;
    this.itemsS.getHeroes()
      .subscribe( resp => {
        this.producto = resp;
        this.cargando = false;
      });
  }


}
