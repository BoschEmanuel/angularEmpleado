import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { EmpleadoComponent } from "./empleado/empleado.component";
import { LoginService } from "./login.services";


@Injectable()
export class DataSevices{

/**
 * metodo constiructor del servicio de datos para firebase
 */
    constructor(private httpClient:HttpClient,private loginService:LoginService) {

    }

    guardarEmpleados(empleados:Array<EmpleadoComponent>){

        this.httpClient.put('https://mis-clientes-87d71-default-rtdb.firebaseio.com/datos.json',empleados).subscribe(

        response => console.log("Se han guardado los empleados: "+ response),

        error => console.log("Error: "+ error)

        );
    }

    actualizarEmpleado(indice:number,empleado: EmpleadoComponent){
        let url = 'https://mis-clientes-87d71-default-rtdb.firebaseio.com/datos/'+ indice +'.json';

        this.httpClient.put(url,empleado).subscribe(
            response => console.log("Se han actualizado un empleado: " + response),
            error => console.log("Error: "+ error)
        );
    }

    cargarEmpleados(): Observable<Object>{
        const token = this.loginService.getIdToken();
        let test =    this.httpClient.get('https://mis-clientes-87d71-default-rtdb.firebaseio.com/datos.json?auth='+token);

       return test;
    }


    eliminarEmpleado(indice:number){
        let url =  'https://mis-clientes-87d71-default-rtdb.firebaseio.com/datos/'+ indice +'.json';
        this.httpClient.delete(url).subscribe(
            response => console.log("Se ha eliminado un empleado "+ response),
            error => console.log("Error: "+ error)
        );

    }

}