import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ClienteService } from '../../servicios/cliente.service';


@Component({
  selector: 'app-PagRegistroCli',
  templateUrl: './PagRegistroCli.component.html',
  styleUrls: ['./PagRegistroCli.component.css']
})
export class PagRegistroCliComponent implements OnInit {
  formula:FormGroup;
  constructor(
    private formBuild:FormBuilder,
    private ClienteServicio:ClienteService
  ) { 
    this.formula=this.formBuild.group({
      "nombre":[],
      "apellido":[],
      "pasword":[],
      "correo":[],
      "telefono":[],
    });
  }
  
  ngOnInit() {
  }

  guardarcli(){
   // this.ClienteServicio.insertcliente();
  }

}
