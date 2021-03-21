import { TestBed } from '@angular/core/testing';

import { DocumentsConfigService } from './documents-config.service';

describe('DocumentsConfigService', () => {
  let service: DocumentsConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentsConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
