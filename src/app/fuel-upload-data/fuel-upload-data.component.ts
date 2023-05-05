import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FuelSaleService } from '../fuel-sale.service';
import { FuelSaleForm } from './fuel-sale-upload-form';

@Component({
  selector: 'app-fuel-upload-data',
  templateUrl: './fuel-upload-data.component.html',
  styleUrls: ['./fuel-upload-data.component.css']
})
export class FuelUploadDataComponent implements OnInit {

  fuelSaleForm: FuelSaleForm = new FuelSaleForm("",0,0,0,0,new Date(),"");
  message : any;
  fuelGradeList : any;

  gradOptions = [
    { label: 'Regular', value: 'Regular' },
    { label: 'Plus', value: 'Plus' },
    { label: 'Premium', value: 'Premium' },
    { label: 'Disel', value: 'Disel' }
  ];
  
  constructor(private fService : FuelSaleService, private router: Router) {  
  }

  ngOnInit() {
    console.log("Inside Fuel Form Init..");
    this.fService.getFuelGradeDetails().subscribe(data => {
      console.log("data : "+data);
      this.fuelGradeList = data;
      console.log("After fuelGradeList : "+this.fuelGradeList);
    });
    
  }

  onSubmit() {
    console.log("Click");
    this.fuelSaleForm.strsaledate = this.fuelSaleForm.saledate.toString();
    console.log("str date after : "+this.fuelSaleForm.strsaledate);
    console.log("grade : "+this.fuelSaleForm.grade);
    let response = this.fService.uploadFuelSaleDetails(this.fuelSaleForm);
    response.subscribe((data) => this.message = data);
    console.log("this.message : "+this.message);
  }

  goBack() {
    console.log("Cancel");
    this.router.navigate(['/fuel-sale'])
  }

}
