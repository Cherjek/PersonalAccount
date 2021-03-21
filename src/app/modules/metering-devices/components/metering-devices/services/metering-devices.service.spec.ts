import { TestBed } from '@angular/core/testing';

import { MeteringDevicesService } from './metering-devices.service';

describe('MeteringDevicesService', () => {
  let service: MeteringDevicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeteringDevicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
