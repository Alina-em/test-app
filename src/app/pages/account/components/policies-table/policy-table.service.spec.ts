import { TestBed } from '@angular/core/testing';

import { PolicyTableService } from './policy-table.service';

describe('PolicyTableService', () => {
  let service: PolicyTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolicyTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
