import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../user';
import { Upauser } from '../upauser';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

  constructor(private http:HttpClient) { }
  //need to change baseurl
  baseurl="https://localhost:7230/api/User/CreateUser";

  updateUser(id:number,payload:Upauser){
    return this.http.patch<User>('https://localhost:7230/api/User/'+id,payload)
  }
 
  getUser(id:number){
    return this.http.get<User>('https://localhost:7230/api/User/'+id)
  }

}

