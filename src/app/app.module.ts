import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

// Rutas
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';
import { PaisesComponent } from './pages/paises/paises.component';
import { InfoproductoComponent } from './pages/infoproducto/infoproducto.component';
import { PedidoComponent } from './pages/pedido/pedido.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { DtemporadaComponent } from './pages/dtemporada/dtemporada.component';
import { CatalogosComponent } from './pages/catalogos/catalogos.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';
import { PoliticasComponent } from './pages/politicas/politicas.component';
import { PaisComponent } from './pages/pais/pais.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoginComponent } from './formularios/login/login.component';
import { RegistroComponent } from './formularios/registro/registro.component';
import { FormsModule } from '@angular/forms';
// servicios
import { ChatService } from './providers/chat.service';
import { CarritoComponent } from './pages/carrito/carrito.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ItemComponent,
    SearchComponent,
    PaisesComponent,
    PaisComponent,
    InfoproductoComponent,
    CarritoComponent,
    PedidoComponent,
    CategoriasComponent,
    DtemporadaComponent,
    CatalogosComponent,
    EmpresaComponent,
    PoliticasComponent,
    LoginComponent,
    RegistroComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
