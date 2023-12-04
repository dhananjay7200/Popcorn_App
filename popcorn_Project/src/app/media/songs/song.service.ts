import { Injectable, OnInit } from '@angular/core';
import { Favsongs } from './favsongs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Song } from 'src/app/client/songs/interface/song';
import { TokenserviceService } from 'src/app/tokenservice.service';
import { SongsComponent } from './songs.component';

@Injectable({
  providedIn: 'root'
})
export class SongService  {

  constructor(private http:HttpClient,private service:TokenserviceService) {
    
   }

 




  get(){
    return this.http.get<Song[]>('https://localhost:7230/api/Song');
  }
  postfavsong(payload:Favsongs){
      return this.http.post<Favsongs[]>('https://localhost:7230/api/FavSongs',payload);
  }
     


 // let headers=new Headers();
 //queryParams:HttpParams = new HttpParams().append("id",1);
 
 
  fetchfavsongs(id:number){
    return this.http.get<Song[]>('https://localhost:7230/fav/'+id);
  }


  //delete fav api 
 //this should be the userid
  deletefavsong(sid:number,uid:number){
    return this.http.delete<Favsongs>(`https://localhost:7230/api/FavSongs/${uid}/${sid}`);
  }
}

