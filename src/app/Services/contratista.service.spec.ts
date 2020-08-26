import { TestBed } from '@angular/core/testing';

import { ContratistaService } from './contratista.service';

describe('ContratistaService', () => {
  let service: ContratistaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratistaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
