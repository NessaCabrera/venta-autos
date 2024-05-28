import{NgModule} from "@angular/core";
import { PagListaVehiculosComponent } from "./PagListaVehiculos/PagListaVehiculos.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AEspacioPipe } from "../utilitarios/pipes/AEspacio.pipe";
import { VehiculoDetalleComponent } from "./VehiculoDetalle/VehiculoDetalle.component";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./Home/Home.component";
import { PagVehiculoRegistroComponent } from "./PagVehiculoRegistro/PagVehiculoRegistro.component";

@NgModule({
    declarations:[
        PagListaVehiculosComponent,
        VehiculoDetalleComponent,
        PagVehiculoRegistroComponent,
        HomeComponent,
        AEspacioPipe
    ],
    imports:[
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule
    ],
   
    exports:[
        PagListaVehiculosComponent,
        VehiculoDetalleComponent,
        PagVehiculoRegistroComponent,
        HomeComponent
    ]
})

export class PaginaModule{

}