import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';




@Injectable() /*para poder importarla a otros lados*/
export class LoginService{

    token:string;

    /**
     *
     */
    constructor(private router:Router) {
     
    }

    login(email:string,password:string){
        console.log("datos : " + email + " " + password);
      firebase.auth().signInWithEmailAndPassword(email,password).then(
        response => {
            firebase.auth().currentUser?.getIdToken().then(
                token => {
                    this.token = token;
                    this.router.navigate(['/']);
                    this.token = token;
                }
            )
        }
      );
    }

    getIdToken(){
        return this.token;
    }
 
}