import { Component } from '@angular/core';
import { SongService } from './song.service';
import { Router } from '@angular/router';
import { Song } from 'src/app/client/songs/interface/song';
import { Favsongs } from './favsongs';
import { TokenserviceService } from 'src/app/tokenservice.service';
import { TosterService } from 'src/app/helper/toster/toster.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent {

  Userid:number=0;
  userinfo:any;
 //for play song function
 // @ViewChild('player')players :ElementRef<string> | undefined ;
  //for the play function
  mySongs:Song[]=[];
  favSongsfetch:Song[]=[];
  favSongs:Favsongs={
       
    pkFavSongsId:0,
    fkSongsId:0,
    fkUserId:0,
    isDeleted:0
  }
  constructor(private songService:SongService,private router:Router,private service:TokenserviceService,private notify:TosterService){
     
  }

  ngOnInit():void{
    this.userinfo=this.service.decodetoken();
    this.Userid=this.userinfo.id;
    this.get();
    this.getUserFav();
    this.NavDisappear();
  }

  get(){
    this.songService.get().subscribe((data)=>{
      this.mySongs=data;
    })



   

}

 //addToFav
 addToFav( songsId:number){
this.favSongs.fkSongsId=songsId;
this.favSongs.fkUserId=this.Userid;
this.favSongs.isDeleted=0;
  this.songService.postfavsong(this.favSongs).subscribe({next:(data)=>{

  }});

  //alert("Added to favourites");
  this.notify.showSuccess("Added to favourites","Done");
  window.location.reload();
 
}//add to fav ends

//play the song
video:any="";
sname:any="";
image:any="../assets/83.jpg"
playSong(vidUrl:string,imgUrl:string,songTitle:string){
 // this.players.nativeElement.src=vidUrl;
 this.video=vidUrl;
 this.image=imgUrl;
 window.scroll(0,0);

 
}
//play the song ends


searchText:string='';


onSearchTextEntered(searchValue:string){
  this.searchText=searchValue;
  console.log(this.searchText);
}

getUserFav(){ 
  this.songService.fetchfavsongs(this.Userid).subscribe((data)=>{
    this.favSongsfetch=data;
  })
}

//delete fav
deleteFav(sid:number){
  this.songService.deletefavsong(sid,this.Userid).subscribe();
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

