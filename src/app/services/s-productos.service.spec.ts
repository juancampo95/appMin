import { TestBed } from '@angular/core/testing';

import { SProductosService } from './s-productos.service';

describe('SProductosService', () => {
  let service: SProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
