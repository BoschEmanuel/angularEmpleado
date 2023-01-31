import { EmpleadoComponent } from "./empleado/empleado.component";

export class EmpleadosService{

    empleados: Array<EmpleadoComponent> = new Array<EmpleadoComponent>();

    agregarEmpleadoServicio(empleado:EmpleadoComponent){
        this.empleados.push(empleado);
    }
}