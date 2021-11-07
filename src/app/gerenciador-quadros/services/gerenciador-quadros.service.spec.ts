import { TestBed } from '@angular/core/testing';

import { GerenciadorQuadrosService } from './gerenciador-quadros.service';

describe('GerenciadorQuadrosService', () => {
  let service: GerenciadorQuadrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GerenciadorQuadrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
