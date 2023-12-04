import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Series } from './series';
import { HttpClient } from '@angular/common/http';
import {Favseries} from './favseries';
import { SeriesComponent } from './series.component';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  uid:number=0;

constructor(private http:HttpClient) {

 }

  //to display all the series on the web page
  get(){
    return this.http.get<Series[]>('https://localhost:7230/api/Series')
  }

  

  //posting favseries
  postfavseries(payload:Favseries){
    
    return this.http.post<Favseries[]>('https://localhost:7230/api/FavSeries',payload);
}

//getting alll the user fav


fetchfavseries(id:number){
  return this.http.get<Series[]>('https://localhost:7230/favse/'+id)
}

//deleting the users fav series
deletefavseries(userid:number,sid:number){
  return this.http.delete<Favseries>(`https://localhost:7230/api/FavSeries/${userid}/${sid}`)
 // https://localhost:7049/api/FavSeries/9/21
}

}

