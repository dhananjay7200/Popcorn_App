import { Component } from '@angular/core';
import { SeriesserviceService } from '../series/service/seriesservice.service';
import { Router } from '@angular/router';
import { Series } from '../series/interface/series';
import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-clientseries',
  templateUrl: './clientseries.component.html',
  styleUrls: ['./clientseries.component.css']
})
export class ClientseriesComponent {

  id:number=0;

name:string="";

clientseries:Series[]=[] 

  constructor(private service:SeriesserviceService,private router :Router){
  }
  ngOnInit(): void {
    this.decodetoken();
    this.getseries();
  }


  getseries(){
    this.service.getclientSeries(this.id).subscribe((data)=>{this.clientseries=data});
  }

  deleteseries(Songid:number){
    this.service.deleteSeries(Songid).subscribe({
      next:(data)=>{ /*this.router.navigate([''])*/ alert("deleted")},error:(err)=>{
        alert("Series Removed");
        window.location.reload();
  }});


  }

  decodetoken(){
    const localToken=sessionStorage.getItem("Token");
  
   const helper = new JwtHelperService();
  const userInfo=localToken!=null?helper.decodeToken(localToken):null
  
  const data=userInfo?{
    id:userInfo.id
  }:null
  this.id=userInfo.id
  this.name=userInfo.name
  }


  

}
