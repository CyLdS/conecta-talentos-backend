import { Injectable } from '@nestjs/common';
import { Estudiante } from 'src/estudiante';

@Injectable()
export class EstudiantesService {

    private estudiante: Estudiante[]= [];

    obtenerEstudiante(): Estudiante[] {
        return this.estudiante;
    }

    obtenerEstudiantePorId( idx:number ): Estudiante{
        for(let i = 0; i < this.estudiante.length; i++){
            if(this.estudiante[i].id == idx){
                return this.estudiante[i];
            }
        }
        return null; 
    }
    
    crearEstudiante( estudiante:Estudiante ):void{
        estudiante.id = this.estudiante.length + 1;
        this.estudiante.push(estudiante);
    }

    eliminarEstudiante(id: number):void{
        for(let i = 0; i < this.estudiante.length; i++){
            if(this.estudiante[i].id == id){
                this.estudiante.splice(i -1, 1);
            }
        }
    }


}
