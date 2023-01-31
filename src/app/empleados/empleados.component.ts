import { Component } from '@angular/core';
import { EmpleadoComponent } from '../empleado/empleado.component';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent {

  empleado: EmpleadoComponent = new EmpleadoComponent();
  empleados: Array<EmpleadoComponent>;

  constructor(private miServicio: ServicioEmpleadosService) {
    this.empleados = new Array<EmpleadoComponent>();

  }

  AgregarEmpleado(): void {
    this.miServicio.muestraMensaje("se agregara el empleado: " + this.empleado.nombre + " "
      + this.empleado.apellido + " con el cargo de: " + this.empleado.cargo + " con un salario de: " + this.empleado.salario);
    this.empleados.push(this.empleado);
    this.empleado = new EmpleadoComponent();
  }
  VerificarCampos(): boolean {
    let resp: boolean = true;

    if (this.empleado.nombre == undefined)
      resp = false;
    if (this.empleado.apellido == undefined)
      resp = false;
    if (this.empleado.cargo == undefined)
      resp = false;
    if (this.empleado.salario <= 0)
      resp = false;

    return resp;
  }

}

