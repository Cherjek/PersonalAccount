import { TestBed } from '@angular/core/testing';

import { RecoveryConfirmConfigService } from './recovery-confirm-config.service';

describe('RecoveryConfirmConfigService', () => {
  let service: RecoveryConfirmConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecoveryConfirmConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
