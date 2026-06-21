import { TestBed } from '@angular/core/testing';

import { RecuerdoService } from './recuerdo.service';

describe('RecuerdoService', () => {
  let service: RecuerdoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecuerdoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
