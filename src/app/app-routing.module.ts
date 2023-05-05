import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuelSaleComponent } from './fuel-sale/fuel-sale.component';
import { HomeComponent } from './home/home.component';
import { DepartmentSaleComponent } from './department-sale/department-sale.component';
import { LoginComponent } from './login/login.component';
import { FuelUploadDataComponent } from './fuel-upload-data/fuel-upload-data.component';
import { DepartmentUploadDataComponent } from './department-upload-data/department-upload-data.component';

const routes: Routes = [
  {path:"", redirectTo:"login",pathMatch:"full"},
  {path:"login", component:LoginComponent},
  {path:"home", component:HomeComponent},
  {path:"fuel-sale", component:FuelSaleComponent},
  {path:"fuel-sale-upload", component:FuelUploadDataComponent},
  {path:"department-sale", component:DepartmentSaleComponent},
  {path:"department-sale-upload", component:DepartmentUploadDataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
