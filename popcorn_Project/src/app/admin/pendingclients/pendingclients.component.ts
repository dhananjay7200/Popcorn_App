import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { adminInterface } from '../admininterface/adminInterface';
import { PendingclientsService } from '../services/pendingclients.service';
import { TosterService } from 'src/app/helper/toster/toster.service';

@Component({
  selector: 'app-pendingclients',
  templateUrl: './pendingclients.component.html',
  styleUrls: ['./pendingclients.component.css']
})
export class PendingclientsComponent {

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

pclients:adminInterface[]=[] 

  constructor(private service:PendingclientsService,private router :Router,private notify:TosterService){
  }
  ngOnInit(): void {
    this.GetPendingClients();
  }


  GetPendingClients(){
    this.service.GetPendingClients().subscribe((data: adminInterface[])=>{this.pclients=data});
  }

  ApproveClient(id:number){
    this.service.ApproveClient(id).subscribe({ next:(data)=>{ this.notify.showSuccess("Approved","Done"),window.location.reload()},error:(err)=>{window.location.reload()}}) 
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['login']) 
   
  }
}
