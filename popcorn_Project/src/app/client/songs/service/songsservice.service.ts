import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Song } from '../interface/song';

@Injectable({
  providedIn: 'root'
})
export class SongsserviceService {

  constructor(private http:HttpClient) { }

  // 
 
   Addsong(payload:Song){
     return this.http.post<Song>("https://localhost:7230/api/Song",payload)
   }
 deletesong(id:number){
   return this.http.delete<Song>("https://localhost:7230/api/Song/"+id)
 }
 
 getclientSong(id:number){
   return this.http.get<Song[]>("https://localhost:7230/api/Song/"+id)
 }
}
