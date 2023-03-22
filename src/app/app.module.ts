import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { EmpleadoHijoCComponent } from './empleado-hijo-c/empleado-hijo-c.component';
import { CaracteristicasEmpleadoCComponent } from './caracteristicas-empleado-c/caracteristicas-empleado-c.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { QuienesSomosComponentComponent } from './quienes-somos-component/quienes-somos-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component';
import { ErrorPersonalizadoComponentComponent } from './error-personalizado-component/error-personalizado-component.component';
import { DataSevices } from './data.services';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.services';
import { CookieService } from 'ngx-cookie-service';
import { LoginGuardian } from './login/login-guardian';


const appRoutes:Routes=[

  {path:'', component:HomeComponentComponent,canActivate:[LoginGuardian]},
  {path:'proyectos',component:ProyectosComponentComponent,canActivate:[LoginGuardian]},
  {path:'quienes-somos',component:QuienesSomosComponentComponent,canActivate:[LoginGuardian]},
  {path:'contacto',component:ContactoComponentComponent,canActivate:[LoginGuardian]},
  {path:'actualizar',component:ActualizaComponentComponent,canActivate:[LoginGuardian]},
  {path:'login',component:LoginComponent},
  {path:'**',component:ErrorPersonalizadoComponentComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    EmpleadoComponent,
    EmpleadoHijoCComponent,
    CaracteristicasEmpleadoCComponent,
    ProyectosComponentComponent,
    HomeComponentComponent,
    QuienesSomosComponentComponent,
    ContactoComponentComponent,
    ActualizaComponentComponent,
    ErrorPersonalizadoComponentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule   
  ],
  providers: [ServicioEmpleadosService,EmpleadosService,DataSevices,LoginService, CookieService,LoginGuardian],
  bootstrap: [AppComponent]
})
export class AppModule { }
