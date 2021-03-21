import { TestBed } from '@angular/core/testing';

import { CustomerAppService } from './customer-app.service';

describe('CustomerAppService', () => {
  let service: CustomerAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
