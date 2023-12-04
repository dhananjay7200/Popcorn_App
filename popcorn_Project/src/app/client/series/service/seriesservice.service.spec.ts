import { TestBed } from '@angular/core/testing';

import { SeriesserviceService } from './seriesservice.service';

describe('SeriesserviceService', () => {
  let service: SeriesserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
