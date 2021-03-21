import { TestBed } from '@angular/core/testing';

import { HomeConfirmConfigService } from './home-confirm-config.service';

describe('HomeConfirmConfigService', () => {
  let service: HomeConfirmConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeConfirmConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
