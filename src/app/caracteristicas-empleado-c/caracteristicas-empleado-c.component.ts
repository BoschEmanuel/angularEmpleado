import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})
export class CaracteristicasEmpleadoCComponent {
@Output() caracteristicasEmpleados = new EventEmitter<string>();  

nuevaCaracteristica:string="";

agregaCaracteristicas(){
  this.caracteristicasEmpleados.emit(this.nuevaCaracteristica +";");
  this.nuevaCaracteristica = "";
}

}
 