import { TestBed } from '@angular/core/testing';

import { MeterDevicesCreateService } from './meter-devices-create.service';

describe('MeterDevicesCreateService', () => {
  let service: MeterDevicesCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeterDevicesCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
