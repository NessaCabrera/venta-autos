import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/Home/Home.component';
import { PagListaVehiculosComponent } from './paginas/PagListaVehiculos/PagListaVehiculos.component';
import { PagNotFoundComponent } from './paginas/PagNotFound/PagNotFound.component';
import { PagVehiculoRegistroComponent } from './paginas/PagVehiculoRegistro/PagVehiculoRegistro.component';
import { VehiculoDetalleComponent } from './paginas/VehiculoDetalle/VehiculoDetalle.component';
import { PagRegistroCliComponent } from './paginas/PagRegistroCli/PagRegistroCli.component';
const routes: Routes = [
  {
    path:"home",
    component: HomeComponent
  },
  {
    path:"vehiculos",
    component: PagListaVehiculosComponent
    
  },
  
  {
    path:"vehiculo/:codigo",
    component: VehiculoDetalleComponent
  },
  {
    path:"vehiculo",
    component: PagVehiculoRegistroComponent
  },
  {
    path:"cliente",
    component: PagRegistroCliComponent
  },
  {
    path:"",
    component: PagListaVehiculosComponent,
    pathMatch: "full"
  },
  {
    path:"**",
    component: PagNotFoundComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
