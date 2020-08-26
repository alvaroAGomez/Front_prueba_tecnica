import { Component, OnInit, Input } from '@angular/core';
import { ContratistaService } from '../../Services/contratista.service';
import { Contratista } from '../../Models/contratista';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listado-contratistas',
  templateUrl: './listado-contratistas.component.html',
  styleUrls: ['./listado-contratistas.component.css']
})
export class ListadoContratistasComponent implements OnInit {

  listaContratistas: Contratista[];
  contratistaSeleccionado: Contratista = new Contratista();
  bandera: number;
  

  constructor(private contratistaService: ContratistaService, private toastr: ToastrService) {

    this.contratistaService.getContratistasActivos().subscribe((res: Contratista[]) => {
      this.listaContratistas = res;

    });

  }

  ngOnInit(): void {

    this.contratistaService.listado$.subscribe(res => {
      this.listaContratistas = res;
    });

    this.contratistaService.bandera$.subscribe(bandera => {
      this.bandera = bandera;
    });



  }

  actualizarContratista(dni: number) {
    this.contratistaService.getContratista(dni).subscribe((res: Contratista) => {

      this.contratistaService.modificarContratista$.emit(res);

      this.contratistaSeleccionado = res;
      this.bandera = 1;
      this.contratistaService.bandera$.emit(this.bandera);

    });
  }

  eliminarContratista(idUser: number) {

    if (confirm('Seguro que quiere borrar a este contratista?')) {

      this.contratistaService.deleteContratista(idUser).subscribe((res: Contratista) => {

        this.contratistaService.getContratistas().subscribe(todos => {
          this.contratistaService.listado$.emit(todos);
          this.toastr.warning('Contratista Eliminado con exito', 'Eliminacion')
        });

      });
    }

  }

}
