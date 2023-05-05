import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableExporterModule } from 'mat-table-exporter';

import { FuelSaleService } from './fuel-sale.service';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FuelSaleComponent } from './fuel-sale/fuel-sale.component';
import { DepartmentSaleComponent } from './department-sale/department-sale.component';
import { FuelUploadDataComponent } from './fuel-upload-data/fuel-upload-data.component';
import { DepartmentUploadDataComponent } from './department-upload-data/department-upload-data.component';

@NgModule({
  declarations: [
    AppComponent,
    FuelSaleComponent,
    HomeComponent,
    DepartmentSaleComponent,
    LoginComponent,
    FuelUploadDataComponent,
    DepartmentUploadDataComponent
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableExporterModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule
  ],
  providers: [FuelSaleService,DatePipe],
  bootstrap: [AppComponent]
})

export class AppModule { }
