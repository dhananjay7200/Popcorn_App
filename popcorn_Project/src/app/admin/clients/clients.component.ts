import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { adminInterface } from '../admininterface/adminInterface';
import { ClientsService } from '../services/clients.service';
import { TosterService } from 'src/app/helper/toster/toster.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {

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

clients:adminInterface[]=[] 

  constructor(private service:ClientsService,private router :Router,private notify:TosterService){
  }
  ngOnInit(): void {
    this.GetApprovedClients();
  }


  GetApprovedClients(){
    this.service.GetClients().subscribe((data: adminInterface[])=>{this.clients=data});
  }

  DeleteClient(id:number){
    this.service.DeleteClientById(id).subscribe({ next:(data)=>{this.notify.showSuccess("Deleted","Done"),window.location.reload()},error:(err)=>{window.location.reload()}}) 
  }

   logout(){
      sessionStorage.clear();
      this.router.navigate(['login']) 
     
    }

}
