import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoComponent } from '../empleado/empleado.component';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent {

  title = 'Formulario de alta de empleado';

  indice:number;

  accion:number;

  empleado: EmpleadoComponent = new EmpleadoComponent();
  empleados: Array<EmpleadoComponent>;


  constructor(private router:Router,private route:ActivatedRoute, private miServicio: ServicioEmpleadosService,private empleadosService:EmpleadosService) {
  
  }
  
    volverHome():void{
      this.router.navigate([''])
    }
  
  
  


  ngOnInit(): void {
   // this.empleados = new Array<EmpleadoComponent>();
    this.accion = parseInt(this.route.snapshot.queryParams['accion']);

    this.empleados = this.empleadosService.empleados;

    this.indice = parseInt(this.route.snapshot.queryParams['id']);
    //this.route.snapshot.params['id'];

    this.empleado = this.empleadosService.encontrarEmpleado(this.indice);
  }

  
  
  AgregarEmpleado(): void {
    // this.miServicio.muestraMensaje("se agregara el empleado: " + this.empleado.nombre + " "
    //   + this.empleado.apellido + " con el cargo de: " + this.empleado.cargo + " con un salario de: " + this.empleado.salario);
    //this.empleados.push(this.empleado);
    this.empleadosService.agregarEmpleadoServicio(this.empleado);
    this.empleado = new EmpleadoComponent();
    this.router.navigate(['']);
  }

  ModificarEmpleado() {
    this.empleadosService.modificarEmpleadoServicio(this.indice, this.empleado);
    this.empleado = new EmpleadoComponent();
    this.router.navigate(['']);
    }

    EliminarEmpleado(){
    this.empleadosService.eliminarEmpleadoServicio(this.indice);
    this.empleado = new EmpleadoComponent();
    this.router.navigate(['']);
    }

    AccionEmpleado(){
      if(this.accion == 1)
      {
        this.ModificarEmpleado();
      }
      else{
        this.EliminarEmpleado();
      }
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
