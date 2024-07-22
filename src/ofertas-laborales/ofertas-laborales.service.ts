import { Injectable } from '@nestjs/common';
import { of } from 'rxjs';
import { OfertaLaboral } from 'src/ofertaLaboral';

@Injectable()
export class OfertasLaboralesService {

    private ofertasLabolrales: OfertaLaboral[]= [];


    crearOferta( oferta:OfertaLaboral ):void{
        oferta.id = this.ofertasLabolrales.length + 1;
        this.ofertasLabolrales.push(oferta);
    }

    obtenerOfertaPorId( id:number ): OfertaLaboral{
        for(let i = 0; i < this.ofertasLabolrales.length; i++){
            if(this.ofertasLabolrales[i].id == id){
                return this.ofertasLabolrales[i];
            }
        }
        return null; 
    }
    //obtener por filto 
    obtenerOfertasLaborales(empresa?: string, estado?: string): OfertaLaboral[] {
        return this.ofertasLabolrales;
    }

    eliminarOfertaLaboral(id: number):void{
        for(let i = 0; i < this.ofertasLabolrales.length; i++){
            if(this.ofertasLabolrales[i].id == id){
                this.ofertasLabolrales.splice(i, 1);
               
            }
        }
    }



}
