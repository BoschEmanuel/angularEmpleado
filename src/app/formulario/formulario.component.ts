import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  mensaje:string = "";
  registrado:boolean =false;
  nombre:string="";
  apellido:string="";
  cargo:string="";
  entradas: Array<{titulo:string}>;


  constructor() {
    this.entradas = 
    [
      {
        titulo:"pythin cada dia mas presente"
      },
      {
        titulo:"java blbla"
      },
      {
        titulo:"javascript todo roto"
      },
      {
        titulo:"kotln test"
      },
      {
        titulo:"dondequedopascal"
      }
      
    ]
    
  }
  registrarUsuario():void{
    this.registrado = true;
   
    this.mensaje = "El usuario se registro con éxito";
  }

}
