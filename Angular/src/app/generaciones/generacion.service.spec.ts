import { TestBed } from '@angular/core/testing';

import { GeneracionService } from './generacion.service';

describe('GeneracionService', () => {
  let service: GeneracionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneracionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
