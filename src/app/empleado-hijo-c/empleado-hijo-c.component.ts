import { Component, Input } from '@angular/core';
import { EmpleadoComponent } from '../empleado/empleado.component';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent {
@Input() empleados: Array<EmpleadoComponent>;;

// arrayCaracteristicas = [''];

agregarCaracteristica(nuevaCaracteristica:string,empleado:EmpleadoComponent):void{
  empleado.arrayCaracteristicas.push(nuevaCaracteristica);
//this.arrayCaracteristicas.push(nuevaCaracteristica);
}

}
 