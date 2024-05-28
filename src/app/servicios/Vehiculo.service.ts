import { Injectable } from '@angular/core';
import { vehiculo } from '../utilitarios/modelos/Vehiculo';
import { Observable, observable, catchError,map, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class VehiculoService {

constructor(private http: HttpClient) { }
baseUrl="http://www.epico.gob.ec/vehiculo/public/api/";
httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};
/*getVehiculos():Vehiculo[]{
  return this.listaVehiculos;
}*/

getVehiculos(filtro?:string,rows?:number, page?:number):Observable<Respuesta>{
  let body=new HttpParams();
  body=filtro ? body.set('filtro',filtro):body;
  body=rows ? body.set('rows',rows):body;
  body=page ? body.set('page',page):body;
  return this.http.get<Respuesta>(this.baseUrl+"vehiculos/", {params:body});
}

insertvehiculo(vehiculo:Vehiculo){
   return this.http.post<Respuesta>(this.baseUrl+"vehiculo/", vehiculo,this.httpOptions);
}

getvehiculo(codigo:string){
  return this.http.get<Respuesta>(this.baseUrl+"vehiculo/"+ codigo);
}
actualizarVehiculo(vehiculo:Vehiculo, codigo:string){
  return this.http.put<Respuesta>(this.baseUrl+"vehiculo/"+codigo, vehiculo,this.httpOptions)
}
eliminarVehiculo(codigo:string){
  return this.http.delete<Respuesta>(this.baseUrl+"vehiculo/"+codigo);
}
/*
getVehiculos(filtro?:string, rows?:number, page?:number ):Observable<vehiculo[]>{
  /*const escucha: Observable<Array<vehiculo>> = new Observable(escuchando =>{
    let lista =this.listaVehiculos.filter(elem => elem.marca.toLowerCase().includes(filtro) )
    escuchando.next(lista);
      let body=new HttpParams();   
    body=filtro?body.set('filtro',filtro):body;
    body=rows? body.set('rows',rows):body;
    body=page? body.set('page',page):body;
    return this.http.get<Respuesta>(this.baseUrl+"vehiculos/", {params:body}).pipe(
      map(respuesta=>respuesta.data)//,
      //catchError(this.handleError)
    );
  }*/
/*

private handleError (error:HttpErrorResponse){
  let errorMessage='Error desconocido';
  if(error.error instanceof ErrorEvent){
    errorMessage='Error:${error.error.menssage}';
  }else{
    errorMessage='Codigo: ${error.status}, Mensaje: ${error.mensage}';
  }
  console.error(errorMessage);
  return throwError(errorMessage);

}

getVehiculo(codigo:string): Observable<vehiculo>{
    const escucha: Observable<vehiculo>=new Observable(escuchando =>{
    setTimeout(()=>{
    let vehiculo=this.listaVehiculos.find(ele=> ele.codigo===codigo);
    escuchando.next(vehiculo);//next, error, complete
  }, 1000);
  });
  return escucha;
}*/
addVehiculo(vehiculo:vehiculo){
  this.listaVehiculos.push(vehiculo);
}
private listaVehiculos: Array<vehiculo> =[
  {"codigo":"A001", "marca":"CHEVROLET", "modelo":"ONIX", "color":"AZUL", "kilometraje":"5000", "precio":1700, "foto": "https://www.chevrolet.com.ec/content/dam/chevrolet/south-america/ecuador/espanol/index/cars/onix-auto-deportivo/agosto-2023/colorizers/2023-jelly-onix-rs-plata.png?imwidth=960", "anio":"2024","calificacion":3 },
  {"codigo":"A002", "marca":"KIA", "modelo":"RIO", "color":"AZUL", "kilometraje":"5000", "precio":1700, "foto":"https://www.kia.com/us/content/dam/kia/us/en/vehicles/k5/2024/trims/gt1-pkg/exterior/4f5866/360/01.png/jcr:content/renditions/desktop.png", "anio":"2024","calificacion":3},
  {"codigo":"A003", "marca":"CHERRY", "modelo":"ARR120","color":"AZUL", "kilometraje":"5000", "precio":1700, "foto":"https://www.chery.com.ec/hubfs/CHERY/WEB%202023/Arrizo%205%20Pro/arrizo-5-pro-front_webp.webp", "anio":"2024","calificacion":3 },
  {"codigo":"A004", "marca":"TOYOTA", "modelo":"GAYA", "color":"AZUL", "kilometraje":"5000", "precio":1700,"foto":"https://cdn3.focus.bg/autodata/i/toyota/gaia/gaia-m10g/large/5d12dd83fd1eae75174d0673a9a51656.jpg", "anio":"2024","calificacion":3},
  {"codigo":"A005", "marca":"HIUNDAI", "modelo":"ACCENT", "color":"AZUL", "kilometraje":"5000", "precio":1700, "foto":null, "anio":"2024","calificacion":5}
];
}

export interface Vehiculo{
  codigo: string;
  marca: string;
  color?:string;
  modelo:string;
  kilometraje?:string;
  precio?:number;
  foto?:string| null;
  anio?:number;
  calificacion?:number

}

export interface Respuesta{
  codigo: string;
  mensaje: string;
  data: Array<Vehiculo>|Vehiculo|any;
  rows:number;
  pages:number;
  records:number;
  page:number;
}