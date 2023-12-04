import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { adminInterface } from '../admininterface/adminInterface';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  id:number=0
  uname:string=""
    urole:string=""
    umail:string=""
    upwd:string=""
    city:string=""
    phone:string=""
    isdeleted:number=0
    isapproved:number=0
    subid:number=0

users:adminInterface[]=[]

constructor(private service:UsersService,private router :Router){
}
ngOnInit(): void {
  this.GetAllUsers();
}


GetAllUsers(){
  this.service.GetUsers().subscribe((data)=>{this.users=data});
}

DeleteUser(id:number){
  this.service.DeleteUserById(id).subscribe({ next:(data)=>{alert("User Removed"),window.location.reload()},error:(err)=>{window.location.reload()}})
}

logout(){
  sessionStorage.clear();
  this.router.navigate(['login']) 
 
}

}
