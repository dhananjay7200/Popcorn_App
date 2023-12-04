import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { adminInterface } from '../admininterface/adminInterface';

@Injectable({
  providedIn: 'root'
})
export class PendingclientsService {

  constructor(private http:HttpClient) { }

  GetPendingClients(){
    return this.http.get<adminInterface[]>("https://localhost:7230/api/Admin/ListOfPendingClients")
  }

  ApproveClient(id:number){
    return this.http.delete<adminInterface>("https://localhost:7230/api/Admin/approveclient/"+id)
  }
}
