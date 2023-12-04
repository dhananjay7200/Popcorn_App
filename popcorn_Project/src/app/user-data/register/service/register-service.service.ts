import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../user';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(private http:HttpClient) { }
  

  

  registerUser(payload:User){
    return this.http.post<User>('https://localhost:7230/api/User',payload)
  }
 
  /*UserPresent(email:string){
    return this.http.get<User>('https://localhost:7049/api/User/userp/'+email)
  }*/
}
