import { TestBed } from '@angular/core/testing';

import { MarketIntelService } from './market-intel.service';

describe('MarketIntelService', () => {
  let service: MarketIntelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarketIntelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
