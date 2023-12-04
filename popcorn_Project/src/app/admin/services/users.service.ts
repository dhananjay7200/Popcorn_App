import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { adminInterface } from '../admininterface/adminInterface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  GetUsers(){
   return this.http.get<adminInterface[]>("https://localhost:7230/api/Admin/ListOfUsers")
  }

  DeleteUserById(id:number){
   return this.http.delete<adminInterface>("https://localhost:7230/api/Admin/DeleteUser/"+id)
  }

  // GetDeletedUsers(){
  //   this.http.get<adminInterface>("")
  // }

  // RecoverUser(id:number){
  //   this.http.patch<adminInterface>("",id)
  // }
}
