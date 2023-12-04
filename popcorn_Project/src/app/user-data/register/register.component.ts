import { Component } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';
import { RegisterServiceService } from './service/register-service.service';
import { Router } from '@angular/router';
import { ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { User } from '../user';
import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isSubmitted: boolean = false;
  display:string="";
  err:string="";
  role:number=0;
  approved:number=0;
  imgurl:any;


email:string='';


  user:User={
    userName: "",
    userEmail: "",
    userPassword: "",
    userCity: "",
    userPhone: "",
    userImage: "",
    fkSubId: 0,
    userrole:"",
    isApproved:0
  }
 

  registerform:FormGroup;

  constructor(private frombuilder:FormBuilder,private reg_service:RegisterServiceService,private router :Router,  private cd: ChangeDetectorRef){
    this.registerform=this.frombuilder.group({
      Name:new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z]{3,}")]),
      Email:new FormControl("",[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{3,4}$")]),
      Phonenumber:new FormControl("",[Validators.required,Validators.pattern("[0-9]{10}")]),
      Password:new FormControl("",[Validators.required,Validators.minLength(8)]),
      City:new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z]{3,}")]),
      file1: new FormControl("",Validators.nullValidator),
      Role:new FormControl("",[Validators.required]),
      Sub:new FormControl("",[Validators.required]),
    })
  }
  uploadimage(event:string){
   this.err=event;
   this.registerform.value.file1=this.err;
   if(this.registerform.value.Role=="User"){
this.approved=1
   }else{
    this.approved=0
   }
   console.log("in uplod"+this.err);
  }

  getProfileurl(element:any) {
    var path =element.value ;
    var filename = path.replace(/^.*\\/, "../../assets/");
    console.log(filename);
    this.imgurl=filename;
  }

  userRole(role:string){
    if(role=="User"){
      this.approved=1
    }else{
      this.approved=0;
    }
    console.log(this.approved);
  }
 
  regSubmit(){
    this.isSubmitted = true;
    
    console.log("in regsubmit");
    if(this.registerform.valid){
      this.user.userName=this.registerform.value.Name,
      this.user.userEmail=this.registerform.value.Email,
      this.user.userPhone=this.registerform.value.Phonenumber,
      this.user.userCity=this.registerform.value.City,
      this.user.userPassword=this.registerform.value.Password,
      this.user.userImage=this.imgurl,
      this.user.userrole=this.registerform.value.Role,
      this.user.fkSubId=this.registerform.value.Sub
      this.user.isApproved=this.approved
      this.reg_service.registerUser(this.user).subscribe({
            next:(data)=>{alert("Register successfully "),this.router.navigate(['login'])},error:(err)=>{
             alert("Username already present");
            }
          });
        }
      }

  
decodetoken(){
  const localToken=sessionStorage.getItem("token");

 const helper = new JwtHelperService();
const userInfo=localToken!=null?helper.decodeToken(localToken):null

const data=userInfo?{
  email:userInfo.userEmail
}:null
console.log(data?.email);
}


}


