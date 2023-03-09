import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EmpleadoComponent } from "./empleado/empleado.component";


@Injectable()
export class DataSevices{

/**
 * metodo constiructor del servicio de datos para firebase
 */
    constructor(private httpClient:HttpClient) {

    }

    guardarEmpleados(empleados:Array<EmpleadoComponent>){

        this.httpClient.put('https://mis-clientes-87d71-default-rtdb.firebaseio.com/datos.json',empleados).subscribe(

        response => console.log("Se han guardado los empleados: "+ response),

        error => console.log("Error: "+ error)

        );
    }




}