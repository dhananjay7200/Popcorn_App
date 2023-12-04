import { Component } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from './service/login-service.service';
import { User } from '../user';
import { Userlogin } from '../userlogin';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TosterService } from 'src/app/helper/toster/toster.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email:any;
role:string="";
  isSubmitted: boolean = false;
  display:string="";
  err:string="";

  user:Userlogin={ 
    userEmail: "",
    userPassword: "",
  }

  loginform:FormGroup;


  constructor(private frombuilder:FormBuilder,private service:LoginServiceService,private router:Router,private notifiction:TosterService,private toastr: ToastrService){
    this.loginform=this.frombuilder.group({
      Email:new FormControl("",[Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{3,4}$"),Validators.required]),
      Password:new FormControl("",[Validators.required,Validators.minLength(8)])
    })
  }

  login(){
    console.log("login");
  if(this.loginform.valid){
    this.user.userEmail=this.loginform.value.Email,
    this.user.userPassword=this.loginform.value.Password
    this.service.Userlogin(this.user).subscribe({ next:(data)=>{
      console.log('res',data)
      sessionStorage.setItem('Token',data.token);
      this.decodetoken();
      if(this.role=="User"){
        this.router.navigate(['userhome'])
        this.NavDisappear();
      
      }
      if(this.role=="Admin"){
        this.router.navigate(['admindashboard'])
      }if(this.role=="Client"){
        this.router.navigate(['clientdashboard'])
      }

      //this.NavDisappear();
    },error:(err)=>{
      alert("Invalid username or passowrd");
      this.toastr.error("no user found","ok");
     
     }
    }

    );
  }else{
    alert("Login failed")
  }
  }
  decodetoken(){
    const localToken=sessionStorage.getItem("Token");
    if(localToken==""){
      this.toastr["error"]("No user found","Sorry");
     }
   const helper = new JwtHelperService();
  const userInfo=localToken!=null?helper.decodeToken(localToken):null
  const data=userInfo?{
    email:userInfo.email,
    
  }:null
 
  console.log(userInfo);
  console.log(userInfo.email);
  console.log(userInfo.role);
     this.role=userInfo.role;
  }
   
  NavDisappear()
  {
    const navItem = document.getElementById("header");
    if (navItem!=null){
      navItem.style.height = '1px'
      navItem.style.visibility='hidden'
    }
    
  }

  notifiy(){
    this.notifiction.showError("No user found","Sorry");
  }

}



