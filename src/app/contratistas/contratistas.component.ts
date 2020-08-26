import { usuario } from './../Models/usuario';
import { Empresas } from './../Models/empresa';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Contratista } from '../Models/contratista';
import { ContratistaService } from '../Services/contratista.service';
import { ToastrService } from 'ngx-toastr';
import { ListadoContratistasComponent } from './listado-contratistas/listado-contratistas.component';

@Component({
  selector: 'app-contratistas',
  templateUrl: './contratistas.component.html',
  styleUrls: ['./contratistas.component.css']
})
export class ContratistasComponent implements OnInit {

  formContratista: FormGroup;
  empresas: Empresas[];
  contratistaSeleccionado: Contratista = new Contratista();
  bandera:number = 0;
  hide=true;

  patternPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
  patternNumeros =/^[0-9]+$/;
  constructor(private contratistaService: ContratistaService,

    private toastr: ToastrService) {

    this.formContratista = this.crearFormGroup();
    this.contratistaService.getEmpresas().subscribe(res => {
      this.empresas = res;
    });
  }

  ngOnInit(): void {
    this.contratistaService.modificarContratista$.subscribe(res => {
      this.contratistaSeleccionado = res;
      this.formContratista.controls['userName'].setValue(this.contratistaSeleccionado.usuario.userName);
      this.formContratista.controls['password'].setValue(this.contratistaSeleccionado.usuario.password);
      //this.formContratista.controls['password'].disabled;
    });
    this.contratistaService.bandera$.subscribe(bandera=>{
      this.bandera = bandera;
    });

  }


  public onSubmit(editcontratista) {
    console.log("datos -->", editcontratista );

    if (this.bandera==0) {

      if (this.formContratista.valid) {

        this.contratistaService.submit(editcontratista).subscribe(
          res => {
            
            this.toastr.success('Guardado con exito', 'Nuevo Contratista');
            this.contratistaService.getContratistas().subscribe(todos => {
              this.contratistaService.listado$.emit(todos);
              
              this.bandera=0;
              this.contratistaService.bandera$.emit(this.bandera);
              this.formContratista.reset();   
            });
          }
        );
      }

   }else {
      if (this.formContratista.valid) {
        this.contratistaService.update(editcontratista, editcontratista.dni).subscribe(
          res => {
            
            this.toastr.success('Actualizado con exito', 'Contratista');
            this.contratistaService.getContratistas().subscribe(todos => {
              this.contratistaService.listado$.emit(todos);
              this.bandera=0;
              this.formContratista.reset();
            });
          }
        );
      }

    }

  }
passwordGenerate:string;
  crearPass(){
    this.passwordGenerate = Math.random().toString(36).substring(3);
    
  }
  

  crearFormGroup() {
    return new FormGroup({
      nombre: new FormControl('',[Validators.required]),
      apellido: new FormControl('',[Validators.required]),
      legajo: new FormControl('',[Validators.required, Validators.pattern(this.patternNumeros)]),
      dni: new FormControl('',[Validators.required, Validators.maxLength(8), Validators.minLength(8), Validators.pattern(this.patternNumeros)]),
      cuil: new FormControl('',[Validators.required,Validators.maxLength(11), Validators.minLength(11), Validators.pattern(this.patternNumeros)]),
      email: new FormControl('',[Validators.required, Validators.email]),
      celular: new FormControl('',[Validators.required,Validators.pattern(this.patternNumeros)]),
      idEmpresa: new FormControl('',[Validators.required]),
      idUsuario: new FormControl('',),
    
      password: new FormControl('',[Validators.required,Validators.pattern(this.patternPassword)]),
      userName: new FormControl('',[Validators.required]),
      status: new FormControl('Operativo',),
      superSu: new FormControl('no',),

    });
  }

  get nombre() { return this.formContratista.get('nombre') };
  get apellido() { return this.formContratista.get('apellido') };
  get legajo() { return this.formContratista.get('legajo') };
  get dni() { return this.formContratista.get('dni') };
  get cuil() { return this.formContratista.get('cuil') };
  get email() { return this.formContratista.get('email') };
  get celular() { return this.formContratista.get('celular') };
  get idEmpresa() { return this.formContratista.get('idEmpresa') };
  get idUsuario() { return this.formContratista.get('idUsuario') };
  get password() { return this.formContratista.get('password') };
  get userName() { return this.formContratista.get('userName') };

}
