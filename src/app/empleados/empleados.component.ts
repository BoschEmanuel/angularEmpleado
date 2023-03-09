import { Component, OnInit } from '@angular/core';
import { EmpleadoComponent } from '../empleado/empleado.component';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  empleado: EmpleadoComponent = new EmpleadoComponent();
  empleados: Array<EmpleadoComponent>;

  constructor(private miServicio: ServicioEmpleadosService,private empleadosService:EmpleadosService) {
   
  }
  ngOnInit(): void {
   // this.empleados = new Array<EmpleadoComponent>();
   // this.empleados = this.empleadosService.empleados;
  //this.empleados =this.empleadosService.getEmpleadosServicio();
  this.empleadosService.getEmpleadosServicio().subscribe(misEmpelados =>{
    console.log(misEmpelados);
    this.empleados = Object.values( misEmpelados);
    this.empleadosService.setEmpleados(this.empleados);
  });

  }

  
  
  AgregarEmpleado(): void {
    // this.miServicio.muestraMensaje("se agregara el empleado: " + this.empleado.nombre + " "
    //   + this.empleado.apellido + " con el cargo de: " + this.empleado.cargo + " con un salario de: " + this.empleado.salario);
    //this.empleados.push(this.empleado);
    this.empleadosService.agregarEmpleadoServicio(this.empleado);
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

