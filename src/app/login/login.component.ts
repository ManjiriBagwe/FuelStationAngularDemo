import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FuelSaleService } from '../fuel-sale.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private service : FuelSaleService, private router:Router) {
  }

  ngOnInit() {
  }

  username: string="";
  password: string="";
  message: any;

  doLogin() {
    console.log("calling login");
    let resp = this.service.login(this.username, this.password);
    console.log("callied login : "+resp);
    resp.subscribe(data => {
      this.message = data;
      this.router.navigate(["/home"])
    });
  }
}
