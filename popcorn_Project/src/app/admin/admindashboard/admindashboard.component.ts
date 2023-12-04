import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent {
  id:number=0;
  name:string="";

  constructor(private router : Router){}
  ngOnInit(): void {
    this.decodetoken()
  }
  
    decodetoken(){
      const localToken=sessionStorage.getItem("Token");
    
     const helper = new JwtHelperService();
    const userInfo=localToken!=null?helper.decodeToken(localToken):null
    
    const data=userInfo?{
      id:userInfo.id
    }:null
    this.id=userInfo.id
    this.name=userInfo.name
    }

    logout(){
      sessionStorage.clear();
      this.router.navigate(['login']) 
     
    }

}
