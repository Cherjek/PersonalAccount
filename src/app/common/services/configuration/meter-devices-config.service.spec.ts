import { TestBed } from '@angular/core/testing';

import { MeterDevicesConfigService } from './meter-devices-config.service';

describe('MeterDevicesConfigService', () => {
  let service: MeterDevicesConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeterDevicesConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
