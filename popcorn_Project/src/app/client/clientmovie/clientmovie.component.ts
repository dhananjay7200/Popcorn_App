import { Component } from '@angular/core';
import { MovieserviceService } from '../movies/service/movieservice.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { Movie } from '../movies/interface/movie';
import { TosterService } from 'src/app/helper/toster/toster.service';
@Component({
  selector: 'app-clientmovie',
  templateUrl: './clientmovie.component.html',
  styleUrls: ['./clientmovie.component.css']
})
export class ClientmovieComponent {
id:number=0;
movieid:number=0;
name:string="";

clientmovies:Movie[]=[] 

  constructor(private service:MovieserviceService,private router :Router,private notifiction:TosterService){
  }
  ngOnInit(): void {
    this.decodetoken()
    this.getclientmovie();
  }


  getclientmovie(){
    this.service.getclientMovie(this.id).subscribe((data)=>{this.clientmovies=data});
  }

  deletemovie(movieid:number){
    this.service.deletemovie(movieid).subscribe({
      next:(data)=>{this.router.navigate(['clientsongs'])},error:(err)=>{
        /*alert("Movie Removed")*/this.notifiction.showWarning("Movie removed","Done"), this.router.navigate(['clientsongs']) 

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
