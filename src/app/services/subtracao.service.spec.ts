import { TestBed } from '@angular/core/testing';

import { SubtracaoService } from './subtracao.service';

describe('SubtracaoService', () => {
  let service: SubtracaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubtracaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
