import { Component, OnInit, input } from '@angular/core';
import { Vehiculo, VehiculoService } from '../../servicios/Vehiculo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-PagListaVehiculos',
  templateUrl: './PagListaVehiculos.component.html',
  styleUrls: ['./PagListaVehiculos.component.css']
})
export class PagListaVehiculosComponent implements OnInit {
  constructor( private vehiculoService:VehiculoService) { }
  
 public  mostrarImagen=false;
  //filtro:string="";
  public listaVehiculos:Array<Vehiculo>=[];

 // private _filtro: string="";
  public rows:number=10;
  public page:number=1;  
  public pages:number=0;
  public filtro:string="";
  
  /*get filtro():string{
    return this._filtro;
  }
  set filtro (data:string){
    this._filtro=data;
   // this.consultaVehiculos();
  }*/
  //@Input() valor:string='';
 
  ngOnInit() {
   /* this.vehiculoService.getVehiculos().subscribe(respuesta=>{
      console.log(respuesta);
      this.listaVehiculos=respuesta;
    });
*/
    console.log('Ingreso a ejecutarse');
   this.consultarVehiculos();
     
   // this.listaVehiculos=this.vehiculoService.getVehiculos();
    /*this.vehiculoService.getVehiculos.subscribe(
      data=>{
        this.listaVehiculos=data;  
      },
      error=>{
        console.error('Error al obtener el vehiculo',error);
      }
    );*/
  }

  /*mostrar(){
    this.mostrarImagen= !this.mostrarImagen
  }*/
 consultarVehiculos(){
    this.vehiculoService.getVehiculos(this.filtro, this.rows,this.page).subscribe(respuesta=>{
      if (respuesta.codigo=='1'){
        this.listaVehiculos=respuesta.data;
        this.pages=respuesta.pages;
        this.paginar(respuesta.pages);
      }
    }); 
  }

  cambiarPagina(pagina:number){
    this.page=pagina;
    this.consultarVehiculos();
  }
  listaPaginas:Array<number>=[];
  paginar(pages:number){
    this.listaPaginas=[];
    for(let i=1; i<=pages;i++){
      this.listaPaginas.push(i);
     }
  }

  siguiente (){
    if(this.page< this.pages){
      this.page++;
      this.consultarVehiculos();
    }
  }
  atras(){
    if(this.page> this.pages){
      this.page--;
      this.consultarVehiculos();
    }

  }


  eliminar(codigo:string){
    
    Swal.fire({
      title:"Estas seguro que deseas eliminar registro?",
      showCancelButton: true,
      confirmButtonText:"Sí",
      cancelButtonText: "No",
      icon:"question"
    }).then((res)=>{
      if(res.isConfirmed){
        this.vehiculoService.eliminarVehiculo(codigo).subscribe(data=>{
          if(data.codigo=='1'){
            this.consultarVehiculos();
            Swal.fire({
              title:"Mensaje",
              text:"vehiculo eliminado con exito",
              icon:"success"
            });
          }else{
            Swal.fire({
            title:"Mensaje",
            text:"No se pudo eliminar el registro: "+data.mensaje,
            icon:"error"
          });
          }
        });
      }
    });
  }


 /* recepcion(dato:number){
    console.log('Dato',dato);
  }*/

}
