import { TestBed } from '@angular/core/testing';

import { DataSService } from './data-s.service';

describe('DataSService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataSService = TestBed.get(DataSService);
    expect(service).toBeTruthy();
  });
});
