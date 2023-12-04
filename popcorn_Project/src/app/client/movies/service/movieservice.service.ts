import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../interface/movie';
@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {

  constructor(private http:HttpClient) { }

 // 

  Addmovie(payload:Movie){
    return this.http.post<Movie>("https://localhost:7230/api/Movie",payload)
  }
deletemovie(id:number){
  return this.http.delete<Movie>("https://localhost:7230/api/Movie/"+id)
}

getclientMovie(id:number){
  return this.http.get<Movie[]>("https://localhost:7230/api/Movie/"+id)
}
}
