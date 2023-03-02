import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { EmpleadoComponent } from '../empleado/empleado.component';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent {
  title = 'Formulario de alta de empleado';

  empleado: EmpleadoComponent = new EmpleadoComponent();
  empleados: Array<EmpleadoComponent>;


  constructor(private router:Router,private miServicio: ServicioEmpleadosService,private empleadosService:EmpleadosService) {
  
  }
  
    volverHome():void{
      this.router.navigate([''])
    }
  
  
  


  ngOnInit(): void {
    this.empleados = new Array<EmpleadoComponent>();
    this.empleados = this.empleadosService.empleados;
  }

  
  
  AgregarEmpleado(): void {
    // this.miServicio.muestraMensaje("se agregara el empleado: " + this.empleado.nombre + " "
    //   + this.empleado.apellido + " con el cargo de: " + this.empleado.cargo + " con un salario de: " + this.empleado.salario);
    //this.empleados.push(this.empleado);
    this.empleadosService.agregarEmpleadoServicio(this.empleado);
    this.empleado = new EmpleadoComponent();
    this.router.navigate([''])
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
