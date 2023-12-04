import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TosterService } from 'src/app/helper/toster/toster.service';
import { MovieserviceService } from '../movies/service/movieservice.service';
import { Movie } from '../movies/interface/movie';
import { Series } from '../series/interface/series';
import { SeriesserviceService } from '../series/service/seriesservice.service';
import { SongsserviceService } from '../songs/service/songsservice.service';
import { Song } from '../songs/interface/song';
@Component({
  selector: 'app-clientdashboard',
  templateUrl: './clientdashboard.component.html',
  styleUrls: ['./clientdashboard.component.css']
})
export class ClientdashboardComponent implements OnInit {
  
  //properties for movies 
  id:number=0;
movieid:number=0;
name:string="";
clientmovies:Movie[]=[] 
clientseries:Series[]=[]
clientsongs:Song[]=[] 

ngOnInit(): void {
  this.decodetoken();
  this.getclientmovie();
  this.getseries();
  this.getclientsongs();
}

constructor(private servicemovie:MovieserviceService,private router :Router,private notifiction:TosterService, private serviceseries:SeriesserviceService, private servicesong:SongsserviceService){}

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
  
  logout(){
    sessionStorage.clear();
    this.router.navigate(['login']) 
  }

  // client movie section

  getclientmovie(){
    this.servicemovie.getclientMovie(this.id).subscribe((data)=>{this.clientmovies=data});
  }

  deletemovie(movieid:number){
    this.servicemovie.deletemovie(movieid).subscribe({
      next:(data)=>{this.router.navigate(['clientsongs'])},error:(err)=>{
        /*alert("Movie Removed")*/this.notifiction.showWarning("Movie removed","Done"), this.router.navigate(['clientsongs']) 

        window.location.reload();
  }});
  }


  // client series section 
  getseries(){
    this.serviceseries.getclientSeries(this.id).subscribe((data)=>{this.clientseries=data});
  }

  deleteseries(Songid:number){
    this.serviceseries.deleteSeries(Songid).subscribe({
      next:(data)=>{ /*this.router.navigate([''])*/ alert("deleted")},error:(err)=>{
        alert("Series Removed");
        window.location.reload();
  }});
}


  // client songs section 
  getclientsongs(){
    this.servicesong.getclientSong(this.id).subscribe((data)=>{this.clientsongs=data});
  }

  deletesong(Songid:number){
    this.servicesong.deletesong(Songid).subscribe({
      next:(data)=>{ /*this.router.navigate([''])*/ alert("deleted")},error:(err)=>{
        alert("Songs Removed");
  }})

}
  }

