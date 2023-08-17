import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaginaInicialClienteModule } from '../modules/pagina-inicial-cliente';
import { AutoCadastroModule } from 'src/modules/auto-cadastro';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PaginaInicialClienteModule,
    AutoCadastroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
