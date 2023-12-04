import { Injectable } from '@angular/core';
import { TokenserviceService } from '../tokenservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userinfo:any;
  constructor(private token:TokenserviceService) {
  }


  isclientlogined(){
    this.userinfo=this.token.decodetoken();
    if(this.userinfo.role=="User" || this.userinfo.role=="Admin"|| this.userinfo.role==null|| this.userinfo==null ){
      return false;
    }
    return true;
  }

  isadminlogined(){
    this.userinfo=this.token.decodetoken();
    if(this.userinfo.role=="User" || this.userinfo.role=="Client" || this.userinfo.role==null || this.userinfo==null){
      return false;
    }
    return true;

  }

  isUserlogined(){
    this.userinfo=this.token.decodetoken();
    if(this.userinfo.role=="Client" || this.userinfo.role=="Admin" || this.userinfo.role==null || this.userinfo==null){
      return false;
    }
    return true;
  }










}
