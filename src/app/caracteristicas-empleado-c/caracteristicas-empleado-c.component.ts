import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})
export class CaracteristicasEmpleadoCComponent {
@Output() caracteristicasEmpleados = new EventEmitter<string>();  

nuevaCaracteristica:string="";

constructor(private miServicio: ServicioEmpleadosService) {
 
}


agregaCaracteristicas(){
  alert("la caracteristica a agregar es: "+ this.nuevaCaracteristica );
  this.caracteristicasEmpleados.emit(this.nuevaCaracteristica +";");
  this.nuevaCaracteristica = "";
}

}
 