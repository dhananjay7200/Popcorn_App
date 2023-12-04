import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { PlatformLocation, Location } from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  token:any='';
  log:number=0;
  title = 'popcorn_app';
  role:string=""
  constructor(private router:Router,private location: PlatformLocation, private loc: Location){location.onPopState(() => {
    //window.history.back();
     this.loc.back(); // tried with this one but no result
  });}
  ngOnInit(): void {
    this.log=1;
  }

  
 /* decodetoken(){
    const localToken=localStorage.getItem("Token");
    this.token=localToken;
   const helper = new JwtHelperService();
  const userInfo=localToken!=null?helper.decodeToken(localToken):null
  const data=userInfo?{
    email:userInfo.email
  }:null
  console.log(userInfo);
  console.log(userInfo.email);
  console.log(userInfo.role);
     this.role=userInfo.role;
  }*/

  nav(){
    if(this.token==null){
      this.log=0;

    }else{
      this.log=1
    }
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['login']) 
    this.log=0;
  }
  
}
