import { TestBed } from '@angular/core/testing';

import { RecoveryConfigService } from './recovery-config.service';

describe('RecoveryConfigService', () => {
  let service: RecoveryConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecoveryConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
