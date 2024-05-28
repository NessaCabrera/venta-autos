import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

constructor(private http: HttpClient) { }
baseUrl="";
httpOptions={
 headers:new HttpHeaders ({'Content-Type':'aplication/json'})
};


insertcliente(cliente:cliente){
  return this.http.post<Respuesta>(this.baseUrl+"cliente/", cliente,this.httpOptions);
}


}

export interface cliente{
  nombre:string;
  apellido:string;
  pasword:string;
  correo?:string | null;
  telefono?:string | null;
}

export interface Respuesta{
  nombre:string;
  apellido:string;
  pasword:string;
  correo:string;
  telefono:string;

}

