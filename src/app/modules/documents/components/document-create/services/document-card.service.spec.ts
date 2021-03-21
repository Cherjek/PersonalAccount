import { TestBed } from '@angular/core/testing';

import { DocumentCardService } from './document-card.service';

describe('DocumentCardService', () => {
  let service: DocumentCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
