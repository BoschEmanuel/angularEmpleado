import { Injectable } from "@angular/core";
import { EmpleadoComponent } from "./empleado/empleado.component";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService{

    empleados: Array<EmpleadoComponent> = new Array<EmpleadoComponent>();

    constructor(private servicioVentanaEmergente:ServicioEmpleadosService) {
        
        
    }

    agregarEmpleadoServicio(empleado:EmpleadoComponent){
        this.servicioVentanaEmergente.muestraMensaje("persona que se va a agregar: "+ "\n"
         + empleado.nombre + "\n" + "Salario: " + empleado.salario);
        this.empleados.push(empleado);
    }
}