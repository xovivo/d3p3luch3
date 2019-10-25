import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ItemsService } from 'src/app/service/items.service';
import { PeluchesModel } from 'src/app/models/peluches.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  producto: PeluchesModel[];
  cargando = false;

  constructor( public _servicio: InfoPaginaService,
                private auth: AuthService,
               private router: Router,
               public itemsS: ItemsService) { }

  ngOnInit() {

    this.cargando = true;
    this.itemsS.getHeroes()
      .subscribe( resp => {
        this.producto = resp;
        this.cargando = false;
      });

  }

  buscarProducto( termino: string ) {

    if ( termino.length < 1 ) {
      return;
    }

    this.router.navigate(['/search', termino]);

  }
  salir() {

    this.auth.logout();
    this.router.navigateByUrl('/login');

  }




  }

