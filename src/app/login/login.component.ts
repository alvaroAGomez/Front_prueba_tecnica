import { LoginService } from './../Services/login.service';
import { HttpClient } from '@angular/common/http';
import { usuario } from './../Models/usuario';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  formLogin: FormGroup;
  usuarioLog:usuario;
  username: string;
  passwords: string;
 
 
  constructor(private router: Router, private loginService: LoginService, private toastr: ToastrService) { 

    this.formLogin = this.crearFormGroup();
  }
    ngOnInit() {
    }

    login(loginForm) {
      console.log("datos -->", loginForm );

      if(this.formLogin.valid){
       this.loginService.login(loginForm).subscribe(res=>{
          this.usuarioLog = res;
          if(this.usuarioLog){
            if(this.usuarioLog.superSu=='si'){
              this.router.navigate(["admin"]);
            }else{
              if(this.usuarioLog.superSu=='no'){
                this.router.navigate(["user"]);
              }
            }

          }else{
            this.toastr.warning('Datos invalidos', 'Error');
          }
       });
      }
    }

    crearFormGroup() {
      return new FormGroup({
        password: new FormControl('',),
        userName: new FormControl('',),
      });
    }

  get password() { return this.formLogin.get('password') };
  get userName() { return this.formLogin.get('userName') };

    }