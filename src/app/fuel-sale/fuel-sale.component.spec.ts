import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelSaleComponent } from './fuel-sale.component';

describe('FuelSaleComponent', () => {
  let component: FuelSaleComponent;
  let fixture: ComponentFixture<FuelSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuelSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuelSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
