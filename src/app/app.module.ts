import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaginaInicialClienteComponent } from './paginaInicialCliente/pagina-inicial-cliente/pagina-inicial-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialClienteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
