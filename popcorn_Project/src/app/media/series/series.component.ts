import { Component } from '@angular/core';
import { Series } from './series';
import { Favseries } from './favseries';
import { SeriesService } from './series.service';
import { Router } from '@angular/router';
import { TokenserviceService } from 'src/app/tokenservice.service';
import { TosterService } from 'src/app/helper/toster/toster.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent {
  Userid:number=0;
  userinfo:any;

  allSeries:Series[]=[];

  //to fetch all the fav series for the user
  favSeriesfetch:Series[]=[];
  
  //for posting
  favSeries:Favseries={
    pkFavSeriesId:0,
    fkSeriesId:0,
    fkUserId:0,
    isDeleted:false
  }


  constructor(private seriesService:SeriesService,private router:Router,private service:TokenserviceService,private notify:TosterService){
     
  }

  ngOnInit(){
    this.userinfo=this.service.decodetoken();
    this.Userid=this.userinfo.id;
   this.get();
   this.getUserFavSeries();
   this.NavDisappear();
  }




//search functionality
//to implement the search functionality
 
searchText:string='';
onSearchTextEntered(searchValue:string){
  this.searchText=searchValue;
  console.log(this.searchText);
}


  //to get all the series
  get(){
    this.seriesService.get().subscribe((data)=>{
      this.allSeries=data;
    })}


    //adding to the fav series
    addToFavSeries(seriesid:number){
      this.favSeries.fkSeriesId=seriesid;
      this.favSeries.fkUserId=this.Userid;//hard-coded
      this.favSeries.isDeleted=0;
      this.seriesService.postfavseries(this.favSeries).subscribe({next:(data)=>{
      
      }});
      //alert("Added to favourites");
      this.notify.showSuccess("Added to favourites","Done");
      window.location.reload();
      
      }

      //fetching all the fav movies

getUserFavSeries(){
  this.seriesService.fetchfavseries(this.Userid).subscribe((data)=>{
    this.favSeriesfetch=data;
  })
}

deleteFavSeries(sid:number){
  this.notify.showWarning("Removed from favourites","Done");
  this.seriesService.deletefavseries(this.Userid,sid).subscribe();
  //alert("Removed from favourites");

  
  window.location.reload();
}
   

logout(){
  sessionStorage.clear();
  this.router.navigate(['login']) 
}

    //play functionality
    //play functionality

 //video:any="../../assets/movie4.mp4";

 video:any="../../assets/movie4.mp4";
playSeries(vidUrl:string){
 
  this.video=vidUrl;
  window.scroll(0,0);
 
  
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


