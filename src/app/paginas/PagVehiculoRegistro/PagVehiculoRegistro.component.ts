import { Component, OnInit } from '@angular/core';
import {vehiculo} from '../../utilitarios/modelos/Vehiculo';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { validadorCodigo } from '../../validaciones/VehiculoValidaciones';

@Component({
  selector: 'app-PagVehiculoRegistro',
  templateUrl: './PagVehiculoRegistro.component.html',
  styleUrls: ['./PagVehiculoRegistro.component.css']
})
export class PagVehiculoRegistroComponent implements OnInit {

  //vehiculo?:vehiculo
  formulario:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private vehiculoServicio:VehiculoService
     
  ) { /*
    this.vehiculo={
      codigo:'',
      marca:'',
      color:'',
      modelo:'',
      kilometraje:'',
      precio:0,
      foto:null,
      anio:' ',
      calificacion:0
    };*/
    this.formulario=this.formBuilder.group({
      "codigo":['',[Validators.required, validadorCodigo()]],
     // "codigo_confirm":[],
      "marca":['',[Validators.required]],
      "modelo":['',[Validators.required]],
      "anio":[],
      "color":[],
      "kilometraje":[],
      "precio":[],
      "calidicacion":[]
    },{
      validators:validarCodigoComparativo()
    });
  }

  ngOnInit() {
  
   
  }
  guardar(){
    /* console.log('Formulario:', this.formulario);
    let vehiculo:vehiculo={...this.formulario.value};
    this.vehiculoServicio.addVehiculo(vehiculo);
   // console.log('Grabado con exito');*/
    if(this.formulario.valid){
      this.vehiculoServicio.insertvehiculo({...this.formulario.value}).subscribe(
        respuesta=>{
          if(respuesta.codigo=='1'){
            Swal.fire({
              title:"Mensaje",
              text: "vehiculo Registrado con Exito",
              icon: "success"
            }).then(res=>{
              this.formulario.reset();
            });
          }else{
            Swal.fire({
            title:"Mensaje",
            text:"No se puedo registrar el vehiculo:"+respuesta.mensaje,
            icon:"error"
      });
    }
  }
);
  }else{
    Swal.fire({
      title:"Mensaje",
      text:" Faltan campos?",
      icon:"error"
    });
  }
 }
}

/*export function validadorCodigo():ValidatorFn{
  return (control: AbstractControl):ValidationErrors|null=>{
    const codigoV=/^[A-Z]\d{4}$/;
    let value=control.value;
    if(codigoV.test(value)){
      return null;
    }
    return {'codigoValidate':true};
  }
}*/
export function validarCodigoComparativo(){
  return( formulario: FormGroup):ValidationErrors|null=>{
    let valor=formulario.controls['codigo'].value;
    let valor2=formulario.controls['codigo_confirm'].value;
    if(valor=== valor2){
      return null;
    }
    return {'codigo_comparativo':true};
  }
}


