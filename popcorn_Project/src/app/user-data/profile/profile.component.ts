import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileServiceService } from './service/profile-service.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../user';
import { Upauser } from './upauser';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  implements OnInit {
id:any=0;
  isSubmitted: boolean = false;
  display:string="";
  err:string="";
  image:string="";
  
  user:Upauser={
    userName: "",
    userEmail: "",
    userPassword: "",
    userCity: "",
    userPhone: "",
    userImage: ""
  }
  updateform:FormGroup;

  constructor(private frombuilder:FormBuilder,private reg_service:ProfileServiceService,private router :Router){
    this.updateform=this.frombuilder.group({
      Name:new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z]{3,}")]),
      Phonenumber:new FormControl("",[Validators.required,Validators.pattern("[0-9]{10}")]),
      Password:new FormControl("",[Validators.required,Validators.minLength(8)]),
      City:new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z]{3,}")]),
      file1: new FormControl("",Validators.nullValidator),
    })
  }
  ngOnInit(): void {
    this.decodetoken();
    this.getbyid(this.id);
  }

  updateProfile(){
    console.log("in update");
    if(this.updateform.valid){
      console.log("in valid");
      this.user.userName=this.updateform.value.Name,
      this.user.userPhone=this.updateform.value.Phonenumber,
      this.user.userCity=this.updateform.value.City,
      this.user.userPassword=this.updateform.value.Password,
      this.reg_service.updateUser(this.id,this.user).subscribe(res=>{
        console.log(res);
        if(res!=null){alert("updated Successfully"),
        this.router.navigate(['userhome'])}else{
          
        }
      }
      );
    }    
      }

      getbyid(sid:any){
        this.reg_service.getUser(sid).subscribe((data)=>{
          this.user=data;
          this.image=this.user.userImage;
          this.updateform.setValue({
            Name:this.user.userName,
            Phonenumber:this.user.userPhone,
      Password:this.user.userPassword,
      City:this.user.userCity,
      file1:this.user.userImage
          })
        })}


        decodetoken(){
          const localToken=sessionStorage.getItem("Token");
        
         const helper = new JwtHelperService();
        const userInfo=localToken!=null?helper.decodeToken(localToken):null

        const data=userInfo?{
          id:userInfo.id
        }:null
        this.id=userInfo.id
        }

        logout(){
          sessionStorage.clear();
          this.router.navigate(['login']) 
        }

}
