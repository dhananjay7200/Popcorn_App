import { HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Movies } from './movies';
import { Favmovies } from './favmovies';
import { Injectable } from '@angular/core';
import { MoviesComponent } from './movies.component';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
 
  constructor(private http:HttpClient) { 
   
  }

  //calling the api to get all the movies from the backend

  get(){
    return this.http.get<Movies[]>('https://localhost:7230/api/Movie');
  }

  /*
  postfavsong(payload:favsongs){
    
      return this.http.post<favsongs[]>('https://localhost:7200/api/FavSongsTbls',payload);
  }
     
  
  */

  postfavmovie(payload: Favmovies){
    return this.http.post<Favmovies[]>('https://localhost:7230/api/FavMovies',payload);
  }


  //getting alll the user fav
 //userid:number=1;
 // queryParams:HttpParams = new HttpParams().append("id",this.userid);

 
  fetchfavmovies(id:number){
    return this.http.get<Movies[]>(`https://localhost:7230/favm/${id}`);
  }

//deleting the fav movies
/*
 deletefavsong(sid:number){
    return this.http.delete<favsongs>(`https://localhost:7200/api/FavSongsTbls/${this.idu}/${sid}`);
  }
*/
deletefavmovie(sid:number,uid:number){
  return this.http.delete<Favmovies>(`https://localhost:7230/api/FavMovies/${uid}/${sid}`)
}


}