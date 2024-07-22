import { Injectable } from '@nestjs/common';
import { Empresa } from 'src/empresa';

@Injectable()
export class EmpresasService {

    private empresas: Empresa[] = [];


    crearEmpresa(empresa: Empresa): void {
        for (let i = 0; i < this.empresas.length; i++) {
            if (this.empresas[i].nombre === empresa.nombre) {
                console.log(`La empresa con nombre ${empresa.nombre} ya existe.`);
                return null;
            }
        }
        // Si no se encontró ninguna empresa con el mismo nombre
        empresa.id = this.empresas.length + 1;
        this.empresas.push(empresa);
        
    }

    obtenerEmpresas(): Empresa[] {
        return this.empresas;
    }

    obtenerEmpresaPorId(id: number): Empresa {
        for (let i = 0; i < this.empresas.length; i++) {
            if (this.empresas[i].id == id) {
                return this.empresas[i];
            }
        }
        return null;
    }



    eliminarEmpresa(id: number): void {
        for (let i = 0; i < this.empresas.length; i++) {
            if (this.empresas[i].id == id) {
                this.empresas.splice(i, 1);

            }
        }
    }



}
