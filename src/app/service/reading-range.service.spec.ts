import { TestBed } from '@angular/core/testing';

import { ReadingRangeService } from './reading-range.service';

describe('ReadingRangeService', () => {
  let service: ReadingRangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadingRangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
