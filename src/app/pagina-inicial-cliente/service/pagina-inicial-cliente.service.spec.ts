import { TestBed } from '@angular/core/testing';

import { PaginaInicialClienteService } from './pagina-inicial-cliente.service';

describe('PaginaInicialClienteService', () => {
  let service: PaginaInicialClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginaInicialClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
