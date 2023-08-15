import { PaginaInicialClienteService } from '../service/pagina-inicial-cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-inicial-cliente',
  templateUrl: './pagina-inicial-cliente.component.html',
  styleUrls: ['./pagina-inicial-cliente.component.css']
})
export class PaginaInicialClienteComponent implements OnInit {

  constructor(private paginaInicialClienteService: PaginaInicialClienteService) { }

  ngOnInit(): void {
  }

}
