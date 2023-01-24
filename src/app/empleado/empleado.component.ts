import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {

  nombre:string ="";
  apellido:string ="";
  cargo:string="";
  salario:number=0;

}
