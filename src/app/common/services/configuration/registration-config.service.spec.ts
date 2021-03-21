import { TestBed } from '@angular/core/testing';

import { RegistrationConfigService } from './registration-config.service';

describe('RegistrationConfigService', () => {
  let service: RegistrationConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
