import { HttpHandler, HttpRequest, HttpInterceptor, HttpEvent} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
 export class userInterceptorService implements HttpInterceptor{
  usuario:string="vanessa.cabrera";
  nombre_parametro:string="user-request";

  constructor() { }

intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
  let clonar=req.clone({
    headers: req.headers.append(this.nombre_parametro,this.usuario)
  });
  return next.handle(clonar);
}
}
