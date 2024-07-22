import { Injectable } from '@nestjs/common';
import { Empresa } from 'src/empresa';

@Injectable()
export class EmpresasService {

    private empresas: Empresa[]= [];

    obtenerEmpresas(): Empresa[] {
        return this.empresas;
    }

    obtenerEmpresaPorId( id:number ): Empresa{
        for(let i = 0; i < this.empresas.length; i++){
            if(this.empresas[i].id == id){
                return this.empresas[i];
            }
        }
        return null; 
    }
    
    crearEmpresa( empresa:Empresa ):void{
        empresa.id = this.empresas.length + 1;
        this.empresas.push(empresa);
    }

    eliminarEmpresa(id: number):void{
        for(let i = 0; i < this.empresas.length; i++){
            if(this.empresas[i].id == id){
                this.empresas.splice(i, 1);
               
            }
        }
    }



}
