import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomeinterceptorInterceptor /*implements HttpInterceptor */{

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    /*console.log("in interceptor");
    const localToken=localStorage.getItem("token");
    request=request.clone({headers:request.headers.set('Authorization','bearer'+localToken)});*/
    
    return next.handle(request);
  }
}
