import { Component } from '@angular/core';
import { Movies } from './movies';
import { Favmovies } from './favmovies';
import { MoviesService } from './movies.service';
import { TokenserviceService } from 'src/app/tokenservice.service';
import { TosterService } from 'src/app/helper/toster/toster.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  Userid:number=0;
  userinfo:any;
  constructor(private movieService:MoviesService,private service:TokenserviceService,private notify:TosterService,private router:Router){}
  ngOnInit(){
    this.userinfo=this.service.decodetoken();
    this.Userid=this.userinfo.id;
    this.get();
    this.getUserFavMovies();
    console.log(this.Userid);
    this.NavDisappear();
    
  }







  //array to store movie data coming frm the backend
  myMovies:Movies[]=[];

  //to fetch all the fav movies for the user
  favMoviesfetch:Movies[]=[];

  //to post the fav movie
  /*
  favSongs:favsongs={
       
    pkFavSongsId:0,
    fkSongsId:0,
    fkUserId:0,
    isDeleted:true
  }
  */ 
 favMovies:Favmovies={
  pkFavMovieId:0,
  fkMovieId:0,
  fkUserId:0,
  isDeleted:false
}

  //constructor for the movies services
  

  //fetching all the songs

get(){
  this.movieService.get().subscribe((data)=>{
    this.myMovies=data;
  })
}

 //to implement the search functionality
 
searchText:string='';
onSearchTextEntered(searchValue:string){
  this.searchText=searchValue;
  console.log(this.searchText);
}

//play functionality

video:any="../../assets/movie4.mp4";


playMovie(vidUrl:string){
 
  this.video=vidUrl;
  window.scroll(0,0);
 
  
 }

//add to fav Movies Functionality

addToFavMovies(movieid:number){
this.favMovies.fkMovieId=movieid;
this.favMovies.fkUserId=this.Userid;
this.favMovies.isDeleted=0;
this.movieService.postfavmovie(this.favMovies).subscribe({next:(data)=>{

}});
//alert("Added to favourites");
this.notify.showSuccess("Added to favourites","Done");
window.location.reload();

}


//fetching all the fav movies

getUserFavMovies(){
  this.movieService.fetchfavmovies(this.Userid).subscribe((data)=>{
    this.favMoviesfetch=data;
  })
}

deleteFavMovie(sid:number){
  this.movieService.deletefavmovie(sid,this.Userid).subscribe();
  //alert("Removed from favourites");
  this.notify.showWarning("Removed from favourites","Done");

  window.location.reload();
}

logout(){
  sessionStorage.clear();
  this.router.navigate(['login']) 
}

NavDisappear()
  {
    const navItem = document.getElementById("header");
    if (navItem!=null){
      navItem.style.height = '1px'
      navItem.style.visibility='hidden'
    }
    
  }

}

