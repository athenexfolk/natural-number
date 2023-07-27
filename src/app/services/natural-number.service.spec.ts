import { TestBed } from '@angular/core/testing';

import { NaturalNumberService } from './natural-number.service';

describe('NaturalNumberService', () => {
  let service: NaturalNumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NaturalNumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
