import { TestBed } from '@angular/core/testing';

import { MiscomprasService } from './miscompras.service';

describe('MiscomprasService', () => {
  let service: MiscomprasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiscomprasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
