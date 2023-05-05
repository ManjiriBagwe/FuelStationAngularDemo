import { TestBed } from '@angular/core/testing';

import { FuelSaleService } from './fuel-sale.service';

describe('FuelSaleService', () => {
  let service: FuelSaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuelSaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
