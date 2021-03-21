import { TestBed } from '@angular/core/testing';

import { RegistrationConfirmConfigService } from './registration-confirm-config.service';

describe('RegistrationConfirmConfigService', () => {
  let service: RegistrationConfirmConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationConfirmConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
