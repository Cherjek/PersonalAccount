import { TestBed } from '@angular/core/testing';

import { TokenAppService } from './token-app.service';

describe('TokenAppService', () => {
  let service: TokenAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
