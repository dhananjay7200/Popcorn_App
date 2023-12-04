import { TestBed } from '@angular/core/testing';

import { SongsserviceService } from './songsservice.service';

describe('SongsserviceService', () => {
  let service: SongsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SongsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
