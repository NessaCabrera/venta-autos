import { NgModule } from "@angular/core";
import { AEspacioPipe } from "./pipes/AEspacio.pipe";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CalificacionComponent } from "./componentes/calificacion/calificacion.component";

@NgModule ({
    
    declarations:[
        AEspacioPipe,
        CalificacionComponent
    ],
    imports:[
     CommonModule
    ],
    exports:[
        AEspacioPipe,
        CalificacionComponent
    ]
})

export class UtilitariosModule{

}