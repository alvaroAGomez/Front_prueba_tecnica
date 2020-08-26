import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ContratistasComponent } from './contratistas/contratistas.component';
import {  HttpClientModule } from '@angular/common/http';
import { ListadoContratistasComponent } from './contratistas/listado-contratistas/listado-contratistas.component';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import { UserComponent } from './user/user.component';
import { ContratistasPipe } from './contratistas.pipe';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContratistasComponent,
    ListadoContratistasComponent,
    UserComponent,
    ContratistasPipe,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule, 
    BrowserAnimationsModule, 
    ToastrModule.forRoot(), 
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    AppRoutingModule,
    
  
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
