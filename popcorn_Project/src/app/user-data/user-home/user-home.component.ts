import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenserviceService } from 'src/app/tokenservice.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit{
  constructor(private service:TokenserviceService, private router: Router){}
  userinfo:any;
  name:string="";

  ngOnInit() {
    this.userinfo=this.service.decodetoken();
    this.name=this.userinfo.name;
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['login']) 
  }

}
