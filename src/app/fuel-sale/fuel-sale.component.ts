import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';

import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { FuelSale } from './fuel-sale-model';
import { FuelSaleService } from '../fuel-sale.service';

@Component({
  selector: 'app-fuel-sale',
  templateUrl: './fuel-sale.component.html',
  styleUrls: ['./fuel-sale.component.css']
})

export class FuelSaleComponent implements OnInit, AfterViewInit  {

  fuelSaleList : any;

  selectedDateToCheckSale : any

  selectedDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');

  displayedColumns: string[] = ['grade', 'volume', 'sale', 'profit', 'margin'];

  dataSource = new MatTableDataSource<any>();

  constructor(private fService : FuelSaleService,private datePipe: DatePipe, private _liveAnnouncer: LiveAnnouncer) {
  }

  ngOnInit() {
    console.log("selectedDate : "+this.selectedDate);
    this.fService.getFuelSaleDetails(this.selectedDate+"").subscribe(data => {
      this.fuelSaleList = data;
      this.dataSource.data = this.fuelSaleList;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  @ViewChild(MatSort)
  sort!: MatSort;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
 
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  onSubmit() {
    console.log("selectedDate onSubmit : "+this.selectedDate);
    this.selectedDateToCheckSale = this.selectedDate;
    console.log("selectedDateToCheckSale : "+this.selectedDateToCheckSale);
    this.fService.getFuelSaleDetails(this.selectedDateToCheckSale).subscribe(data => {
      this.fuelSaleList = data;
      this.dataSource.data = this.fuelSaleList;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  
}
