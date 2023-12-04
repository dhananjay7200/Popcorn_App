import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Series } from '../interface/series';

@Injectable({
  providedIn: 'root'
})
export class SeriesserviceService {

  constructor(private http:HttpClient) { }

 // 

  AddSeries(payload:Series){
    return this.http.post<Series>("https://localhost:7230/api/Series",payload)
  }
deleteSeries(id:number){
  return this.http.delete<Series>("https://localhost:7230/api/Series/"+id)
}

getclientSeries(id:number){
  return this.http.get<Series[]>("https://localhost:7230/api/Series/"+id)
}
}
