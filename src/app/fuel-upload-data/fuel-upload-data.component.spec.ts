import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelUploadDataComponent } from './fuel-upload-data.component';

describe('FuelUploadDataComponent', () => {
  let component: FuelUploadDataComponent;
  let fixture: ComponentFixture<FuelUploadDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuelUploadDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuelUploadDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
