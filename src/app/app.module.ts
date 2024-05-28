import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { userInterceptorService } from './interceptores/UserInterceptor.service';
import { PaginaModule } from './paginas/PaginaModule';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PaginaModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: userInterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
