import {AfterViewInit, Component,OnInit, ViewChild} from '@angular/core';
import { DatePipe } from '@angular/common';

import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { FuelSaleService } from '../fuel-sale.service';

@Component({
  selector: 'app-department-sale',
  templateUrl: './department-sale.component.html',
  styleUrls: ['./department-sale.component.css']
})


export class DepartmentSaleComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['name', 'quantity', 'sale', 'profit', 'margin'];

  departmentSaleList : any

  selectedDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');

  dataSource = new MatTableDataSource<any>();

  selectedDateToCheckSale : any

  constructor(private fService : FuelSaleService, private datePipe: DatePipe, private _liveAnnouncer: LiveAnnouncer) {
  }

  ngOnInit() {
    this.fService.getDepartmentSaleDetails(this.selectedDate+"").subscribe(data => {
      this.departmentSaleList = data;
      this.dataSource.data = this.departmentSaleList;
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
    console.log("selectedDateToCheckSale Obsubmit : "+this.selectedDate);
    this.selectedDateToCheckSale = this.selectedDate;
    console.log("selectedDateToCheckSale : "+this.selectedDateToCheckSale);

    this.fService.getDepartmentSaleDetails(this.selectedDateToCheckSale).subscribe(data => {
      this.departmentSaleList = data;
      this.dataSource.data = this.departmentSaleList;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

}
