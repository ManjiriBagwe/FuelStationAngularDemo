import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentSaleForm } from './department-sale-upload-form';
import { FuelSaleService } from '../fuel-sale.service';

@Component({
  selector: 'app-department-upload-data',
  templateUrl: './department-upload-data.component.html',
  styleUrls: ['./department-upload-data.component.css']
})

export class DepartmentUploadDataComponent implements OnInit {

  departmentSaleForm: DepartmentSaleForm = new DepartmentSaleForm("",0,0,0,0,new Date(),"");
  message : any;
  departmentItemList : any;

  constructor(private fService : FuelSaleService, private router: Router) {  
  }
  
  ngOnInit() {
    console.log("Inside Department Form Init..");
    this.fService.getDepartmentItemDetails().subscribe(data => {
      console.log("data : "+data);
      this.departmentItemList = data;
      console.log("After departmentItemList : "+this.departmentItemList);
    });
  }

  nameOptions = [
    { label: 'Accessories', value: 'Accessories' },
    { label: 'Ice-cream', value: 'Ice-cream' },
    { label: 'Beer/Wine', value: 'Beer/Wine' },
    { label: 'Candy', value: 'Candy' },
    { label: 'Chips', value: 'Chips' },
    { label: 'Grocery', value: 'Grocery' },
    { label: 'ICE', value: 'ICE' },
    { label: 'Lotto', value: 'Lotto' },
    { label: 'Drinks', value: 'Drinks' },
    { label: 'Tobaco', value: 'Tobaco' }
  ];


  onSubmit() {
    console.log("Click");
    this.departmentSaleForm.strsaledate = this.departmentSaleForm.saledate.toString();
    console.log("str date after : "+this.departmentSaleForm.strsaledate);
    console.log("name : "+this.departmentSaleForm.name);
    let response = this.fService.uploadDepartmentSaleDetails(this.departmentSaleForm);
    response.subscribe((data) => this.message = data);
    console.log("this.message : "+this.message);
  }

  goBack() {
    console.log("Cancel");
    this.router.navigate(['/department-sale'])
  }
}
