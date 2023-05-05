import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentSaleComponent } from './department-sale.component';

describe('DepartmentSaleComponent', () => {
  let component: DepartmentSaleComponent;
  let fixture: ComponentFixture<DepartmentSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
