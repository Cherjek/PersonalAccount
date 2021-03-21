import { TestBed } from '@angular/core/testing';

import { EquipmentArchivesService } from './equipment-archives.service';

describe('EquipmentArchivesService', () => {
  let service: EquipmentArchivesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipmentArchivesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
