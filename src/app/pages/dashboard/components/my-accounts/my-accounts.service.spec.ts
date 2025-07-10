import { TestBed } from '@angular/core/testing';

import { MyAccountsService } from './my-accounts.service';

describe('MyAccountsService', () => {
  let service: MyAccountsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyAccountsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
