import { Contratista } from './../Models/contratista';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const headers = new HttpHeaders().append('Access-Control-Allow-Origin', '*');
@Injectable({
  providedIn: 'root'
})
export class ContratistaService {
  
  readonly url = "http://localhost:64964/api";

  listado$ = new EventEmitter();
  modificarContratista$ = new EventEmitter();
  bandera$ = new EventEmitter();
  formUsuario$ = new EventEmitter();

  constructor(private httpClient: HttpClient) {  }


  submit(contra: any): Observable<any> {
    return this.httpClient.post<any>(this.url+'/Contratista', contra);
  }

  update(contra: any, dni: number): Observable<any> {
    return this.httpClient.put<any>(this.url+'/Contratista/'+dni, contra);
  }

  getContratista(dni:number): Observable<any>{
    return this.httpClient.get<any>(this.url+'/Contratista/'+dni);
  }

  getContratistas(): Observable<any>{
    return this.httpClient.get<any>(this.url+'/Contratista');
  }

  getContratistasActivos(): Observable<any>{
    return this.httpClient.get<any>(this.url+'/Contratista');
  }

  getEmpresas(): Observable<any>{
    return this.httpClient.get<any>(this.url+'/Empresa');
  }

  deleteContratista(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url+'/Contratista/'+id);
  }

}
