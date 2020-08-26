import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContratistasComponent } from './contratistas/contratistas.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
    {path : '', component : LoginComponent},
    { path: 'login', component: LoginComponent },
    { path: 'user', component: UserComponent },
    { path: 'admin', component: ContratistasComponent },
    //{path: '**', component: Page404Component}

    
    
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
