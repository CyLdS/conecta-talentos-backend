import { Injectable } from '@nestjs/common';
import { Estudiante } from 'src/estudiante';

@Injectable()
export class EstudiantesService {

    private estudiantes: Estudiante[]= [];

    obtenerEstudiante(): Estudiante[] {
        return this.estudiantes;
    }

    obtenerEstudiantePorId( id:number ): Estudiante{
        for(let i = 0; i < this.estudiantes.length; i++){
            if(this.estudiantes[i].id == id){
                return this.estudiantes[i];
            }
        }
        return null; 
    }
    
    crearEstudiante( estudiante:Estudiante ):void{
        estudiante.id = this.estudiantes.length + 1;
        this.estudiantes.push(estudiante);
    }

    eliminarEstudiante(id: number):void{
        for(let i = 0; i < this.estudiantes.length; i++){
            if(this.estudiantes[i].id == id){
                this.estudiantes.splice(i, 1);
               
            }
        }
    }


}
