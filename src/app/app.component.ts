import { Component } from '@angular/core';

import firebase from 'firebase/compat/app';
import { LoginService } from './login.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Formulario de empleados';

/**
 *
 */
constructor(private loginService:LoginService) {
  
  
}

  ngOnInit():void{


    const firebaseConfig = {
      apiKey: "AIzaSyDj3m0EAR1lCGcvORu58nOxXzw46Cs1Rs8",
      authDomain: "mis-clientes-87d71.firebaseapp.com",
      databaseURL: "https://mis-clientes-87d71-default-rtdb.firebaseio.com",
      projectId: "mis-clientes-87d71",
      storageBucket: "mis-clientes-87d71.appspot.com",
      messagingSenderId: "549779736139",
      appId: "1:549779736139:web:9c369f7e9a07093931efce",
      measurementId: "G-KVB4FZP50W"
    };


    firebase.initializeApp(firebaseConfig);
  }
  


  estaLogeado(){
    return this.loginService.estaLogeado();
  }

  logOut(){
    return this.loginService.logOut();
  }
}
