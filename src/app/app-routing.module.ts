import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';
import { PaisesComponent } from './pages/paises/paises.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { PoliticasComponent } from './pages/politicas/politicas.component';
import { InfoproductoComponent } from './pages/infoproducto/infoproducto.component';
import { LoginComponent } from './formularios/login/login.component';
import { RegistroComponent } from './formularios/registro/registro.component';



const app_routes: Routes = [
    { path: 'home', component: PortafolioComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'productos', component: InfoproductoComponent },
    { path: 'about', component: AboutComponent },
    { path: 'categorias', component: CategoriasComponent },
    { path: 'politicas', component: PoliticasComponent },
    { path: 'paises', component: PaisesComponent },
    { path: 'item/:id_pel', component: ItemComponent},
    { path: 'categoria/:id', component: InfoproductoComponent},
    { path: 'search/:termino', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];


@NgModule({
    imports: [
        RouterModule.forRoot( app_routes, { useHash: true } )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }






