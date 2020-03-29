import { TestBed } from '@angular/core/testing';

import { WarehouseStoreService } from './warehouse-store.service';

describe('WarehouseStoreService', () => {
  let service: WarehouseStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WarehouseStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
