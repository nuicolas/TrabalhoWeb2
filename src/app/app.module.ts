import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaginaInicialClienteModule } from '../modules/pagina-inicial-cliente';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PaginaInicialClienteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
