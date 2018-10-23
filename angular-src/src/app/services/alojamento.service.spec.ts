import { TestBed } from '@angular/core/testing';

import { AlojamentoService } from './alojamento.service';

describe('AlojamentoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlojamentoService = TestBed.get(AlojamentoService);
    expect(service).toBeTruthy();
  });
});
