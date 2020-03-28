import { TestBed } from '@angular/core/testing';

import { MedicineBankStoreService } from './medicine-bank-store.service';

describe('MedicineBankStoreService', () => {
  let service: MedicineBankStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicineBankStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
