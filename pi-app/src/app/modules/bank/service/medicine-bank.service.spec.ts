import { TestBed } from '@angular/core/testing';

import { MedicineBankService } from './medicine-bank.service';

describe('MedicineBankService', () => {
  let service: MedicineBankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicineBankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
