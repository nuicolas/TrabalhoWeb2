import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaInicialClienteComponent } from './pagina-inicial-cliente';
import { PaginaInicialClienteService } from './service';



@NgModule({
  declarations: [
    PaginaInicialClienteComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaginaInicialClienteComponent,
  ],
  providers: [
    PaginaInicialClienteService
  ],
})
export class PaginaInicialClienteModule { }
