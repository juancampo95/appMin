import { TestBed } from '@angular/core/testing';

import { SPedidosService } from './s-pedidos.service';

describe('SPedidosService', () => {
  let service: SPedidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SPedidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
