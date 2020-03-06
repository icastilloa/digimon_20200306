import { TestBed } from '@angular/core/testing';

import { DigiservService } from './digiserv.service';

describe('DigiservService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DigiservService = TestBed.get(DigiservService);
    expect(service).toBeTruthy();
  });
});
