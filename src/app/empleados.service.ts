import { Injectable } from "@angular/core";
import { DataSevices } from "./data.services";
import { EmpleadoComponent } from "./empleado/empleado.component";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService{

 

    empleados: Array<EmpleadoComponent> = new Array<EmpleadoComponent>();

    constructor(private servicioVentanaEmergente:ServicioEmpleadosService,private dataService:DataSevices) {
        
        
    }

    agregarEmpleadoServicio(empleado:EmpleadoComponent){
        this.servicioVentanaEmergente.muestraMensaje("persona que se va a agregar: "+ "\n"
         + empleado.nombre + "\n" + "Salario: " + empleado.salario);
        this.empleados.push(empleado);
        this.dataService.guardarEmpleados(this.empleados);
    }

    modificarEmpleadoServicio(indice:number, empleado: EmpleadoComponent) {
        try {
           let emp:EmpleadoComponent = this.encontrarEmpleado(indice);
           emp = empleado;

           this.dataService.actualizarEmpleado(indice,empleado);
        } catch (error) {
            throw new Error("No se encontro un empleado con el indice "+ indice);
        }
      }

      eliminarEmpleadoServicio(indice: number) {
        try {
         this.empleados.splice(indice,1);
         this.dataService.eliminarEmpleado(indice);
         this.dataService.guardarEmpleados(this.empleados);
         } catch (error) {
             throw new Error("No se encontro un empleado con el indice "+ indice);
         }
      }
    

    getEmpleadosServicio(){
        //:Array<EmpleadoComponent>
        
        //return this.empleados;
        return this.dataService.cargarEmpleados();
    }

    setEmpleados(misEmpleados: Array<EmpleadoComponent> ){
        this.empleados = misEmpleados;
    }

    encontrarEmpleado(indice: number): EmpleadoComponent {
        try {
            return this.empleados[indice];
        } catch (error) {
            throw new Error("No se encontro un empleado con el indice "+ indice);
        }
     
      }
}