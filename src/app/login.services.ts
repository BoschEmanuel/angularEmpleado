import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { CookieService } from 'ngx-cookie-service';




@Injectable() /*para poder importarla a otros lados*/
export class LoginService{

    token:string;

    /**
     * clase de log in 
     */
    constructor(private router:Router,private cookie:CookieService) {
     
    }

    login(email:string,password:string){
        console.log("datos : " + email + " " + password);
      firebase.auth().signInWithEmailAndPassword(email,password).then(
        response => {
            firebase.auth().currentUser?.getIdToken().then(
                token => {
                    this.token = token;
                    this.cookie.set("token",token);
                    this.router.navigate(['/']);
                    this.token = token;

                }
            )
        }
      );
    }

    getIdToken(){

        //return this.token;
        return this.cookie.get("token");
    }

    estaLogeado(){
        //return this.token;
        return this.cookie.get("token");
       
    }

    logOut(){
        firebase.auth().signOut().then(()=> {
            this.token = "";
            this.cookie.set("token","");
            this.router.navigate(['/']);  
            window.location.reload();
            

        });
    }
 
}