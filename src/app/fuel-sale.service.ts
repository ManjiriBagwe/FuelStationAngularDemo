import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { FuelSaleForm } from './fuel-upload-data/fuel-sale-upload-form';
import { DepartmentSaleForm } from './department-upload-data/department-sale-upload-form';

@Injectable({
  providedIn: 'root'
})

export class FuelSaleService {

  constructor(private varHttp : HttpClient) { }

    public login(username:string, password:string) {
    console.log("User : "+username+", pwd : "+password);
   // const headers = new HttpHeaders({ Authorization: 'Basic ' + username + ':' + password })
   // .set('Access-Control-Allow-Origin', '*')
   // .set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
    //const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+""+password)});
   // console.log("headers : "+headers);
    //return this.varHttp.get("http://localhost:8080/", {headers, responseType: 'text' as 'json'});
    return this.varHttp.get("http://localhost:8080/", { responseType: 'text' as 'json'});
  }

  getFuelSaleDetails(selectedDateToCheckSale : string) {
    console.log(selectedDateToCheckSale +"in service");
    //const headers = new HttpHeaders({ Authorization: 'Basic manjiri:123'})
    //.set('Access-Control-Allow-Origin', '*')
    //.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
    //let queryURL = "http://localhost:8080/fuel-sale/"+selectedDateToCheckSale;
    let queryURL = "http://localhost:8090/fuel-sale-service/fuel-sale/"+selectedDateToCheckSale;
    //let queryURL = "http://192.168.1.71:8083/fuel-sale-service/fuel-sale/"+selectedDateToCheckSale;
    console.log("URL : "+queryURL);
    return this.varHttp.get(queryURL);
  }

  uploadFuelSaleDetails(fuelSaleForm: FuelSaleForm) {
    console.log("fuelSaleForm : "+fuelSaleForm);
    //return this.varHttp.post('http://localhost:8080/add-fuel-sale-form', fuelSaleForm, {responseType : 'text' as 'json'});
    return this.varHttp.post('http://localhost:8090/fuel-sale-service/add-fuel-sale-form', fuelSaleForm, {responseType : 'text' as 'json'});
  }

  getFuelGradeDetails() {
    console.log("In Get Fuel Grade Details");
    return this.varHttp.get('http://localhost:8090/fuel-grade-service/fuel-grade');
  }

  getDepartmentSaleDetails(selectedDateToCheckSale : string) {
    console.log(selectedDateToCheckSale +"in service");
    //return this.varHttp.get("http://localhost:8080/fuel-sale?"+"saledate="+selectedDateToCheckSale);
    //let queryURL = "http://localhost:8080/department-sale/"+selectedDateToCheckSale;
    let queryURL = "http://localhost:8090/department-sale-service/department-sale/"+selectedDateToCheckSale;
    console.log("URL : "+queryURL);
    return this.varHttp.get(queryURL);
  }

  uploadDepartmentSaleDetails(departmentSaleForm: DepartmentSaleForm) {
    console.log("departmentSaleForm"+departmentSaleForm);
    //return this.varHttp.post('http://localhost:8080/add-department-sale-form', departmentSaleForm, {responseType : 'text' as 'json'});
    return this.varHttp.post('http://localhost:8090/department-sale-service/add-department-sale-form', departmentSaleForm, {responseType : 'text' as 'json'});
  }

  getDepartmentItemDetails() {
    console.log("In Get Department Details");
    return this.varHttp.get('http://localhost:8090/department-item-service/department-item');
  }
}
