import { Component, OnInit } from '@angular/core';
import { vehiculo } from '../../utilitarios/modelos/Vehiculo';
import { ActivatedRoute } from '@angular/router';
import { VehiculoService } from '../../servicios/Vehiculo.service';

@Component({
  selector: 'app-PagVehiculo',
  templateUrl: './PagVehiculo.component.html',
  styleUrls: ['./PagVehiculo.component.css']
})
export class PagVehiculoComponent implements OnInit {
  vehiculo?:any=//vehiculo=
  {
    codigo:"",
    marca:"",
    modelo:""
  };
  constructor(
    private route:ActivatedRoute,
    private vehiculoService: VehiculoService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.vehiculoService.getvehiculo(params['codigo']).subscribe(data=>{
        this.vehiculo=data;
      });
     // this.vehiculo= this.vehiculoService.getVehiculo (params['codigo']);
   } );
  }
 /* mostrar(){
    this.mostrarImagen=!this.mostrarImagen
  }
*/
  imprimir(data:any){
    console.log('Calificacion:', data)
  }
}
