import { TestBed } from '@angular/core/testing';

import { RegistrationConfirmService } from './registration-confirm.service';

describe('RegistrationService', () => {
  let service: RegistrationConfirmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationConfirmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
