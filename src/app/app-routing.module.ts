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
import { MensajesComponent } from './pages/mensajes/mensajes.component';



const app_routes: Routes = [
    { path: 'home', component: PortafolioComponent },
    { path: 'productos', component: InfoproductoComponent },
    { path: 'about', component: AboutComponent },
    { path: 'categorias', component: CategoriasComponent },
    { path: 'politicas', component: PoliticasComponent },
    { path: 'paises', component: PaisesComponent },
    { path: 'item/:id', component: ItemComponent},
    { path: 'search/:termino', component: SearchComponent },
    { path: 'chat', component: MensajesComponent },
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






