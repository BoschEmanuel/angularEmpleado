import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

_email:string;
_password:string;

ngOnInit():void{

}

/**
 *
 */
constructor(private loginService:LoginService) {
  
  
}

login(form:NgForm){
  const email = form.value.email;
  const password = form.value.password;
 
  this.loginService.login(email,password);


}

}
