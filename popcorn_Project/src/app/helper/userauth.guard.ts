
import { Injectable } from '@angular/core';
import { CanActivate, CanActivateFn, Router, mapToCanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { TokenserviceService } from '../tokenservice.service';

@Injectable({
  providedIn: 'root'
})
export class userauthGuard implements CanActivate  {
constructor(private authservice:AuthService,private router:Router,private ser:TokenserviceService){}

canActivate() :boolean{
  console.log("in auuut 1111");
  if(!this.authservice.isUserlogined()){
    console.log("in auuut");
    //this.router.navigate(["login"]);
    this.router.navigate(["restriction"]);
    return false;
  }
 
  return true;
}

  
};



