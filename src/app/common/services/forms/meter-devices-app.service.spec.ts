import { TestBed } from '@angular/core/testing';

import { MeterDevicesAppService } from './meter-devices-app.service';

describe('MeterDevicesAppService', () => {
  let service: MeterDevicesAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeterDevicesAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
