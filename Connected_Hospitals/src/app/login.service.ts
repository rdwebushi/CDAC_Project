import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from './login';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // dependancy injection for http client
  constructor( public http:HttpClient) { } // DI for http

  checkUser():Observable<Login[]>{
    return this.http.get<Login[]>("/assets/loginDetails.json");
  }

}
