import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentUploadDataComponent } from './department-upload-data.component';

describe('DepartmentUploadDataComponent', () => {
  let component: DepartmentUploadDataComponent;
  let fixture: ComponentFixture<DepartmentUploadDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentUploadDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentUploadDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
