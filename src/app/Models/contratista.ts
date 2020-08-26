import { Empresas } from './empresa';
import { usuario } from './usuario';
export class Contratista{

   nombre : string;
   apellido : string;
   legajo : number;
   dni : number;
   cuil : string;
   email : string;
   celular : string;
   idEmpresa : number;
   idUsuario : number;
   usuario: usuario;
   Empresas: Empresas;
}