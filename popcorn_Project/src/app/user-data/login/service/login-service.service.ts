import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../user';
import { Userlogin } from '../../userlogin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }

  //need to change baseurl

  Userlogin(payload:Userlogin):Observable<any>{
    return this.http.post('https://localhost:7230/login',payload)
  }
}
