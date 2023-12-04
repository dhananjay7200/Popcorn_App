import { TestBed } from '@angular/core/testing';

import { PendingclientsService } from './pendingclients.service';

describe('PendingclientsService', () => {
  let service: PendingclientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PendingclientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
