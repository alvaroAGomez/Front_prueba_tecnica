import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly url = "http://localhost:64964/api";
  constructor(private httpClient: HttpClient) { }


  login(loginForm:any){
    return this.httpClient.post<any>(this.url+'/usuario',loginForm);
  }

}
