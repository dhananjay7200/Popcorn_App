import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class TokenserviceService {

  constructor() { }

  decodetoken(){
    const localToken=sessionStorage.getItem("Token");
  
   const helper = new JwtHelperService();
  const userInfo=localToken!=null?helper.decodeToken(localToken):null
  
  const data=userInfo?{
    id:userInfo.id
  }:null
  return userInfo;
  }
}
