import { TestBed } from '@angular/core/testing';

import { DgservService } from './dgserv.service';

describe('DgservService', () => {
  let service: DgservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DgservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
