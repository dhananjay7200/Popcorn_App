import { Component } from '@angular/core';
import { SongsserviceService } from '../songs/service/songsservice.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { Song } from '../songs/interface/song';

@Component({
  selector: 'app-clientsongs',
  templateUrl: './clientsongs.component.html',
  styleUrls: ['./clientsongs.component.css']
})
export class ClientsongsComponent {

  id:number=0;

name:string="";

clientsongs:Song[]=[] 

  constructor(private service:SongsserviceService,private router :Router){
  }
  ngOnInit(): void {
    this.decodetoken()
    this.getclientsongs();
  }


  getclientsongs(){
    this.service.getclientSong(this.id).subscribe((data)=>{this.clientsongs=data});
  }

  deletesong(Songid:number){
    this.service.deletesong(Songid).subscribe({
      next:(data)=>{ /*this.router.navigate([''])*/ alert("deleted")},error:(err)=>{
        alert("Songs Removed");
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
