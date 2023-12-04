import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { adminInterface } from '../admininterface/adminInterface';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http:HttpClient) { }

  GetClients(){
    return this.http.get<adminInterface[]>("https://localhost:7230/api/Admin/ListOfApprovedClients")
   }
 
   DeleteClientById(id:number){
    return this.http.delete<adminInterface>("https://localhost:7230/api/Admin/DeleteClient/"+id)
   }
}
