import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Estudiante } from 'src/estudiante';
import { EstudiantesService } from './estudiantes.service';

@Controller('estudiante')
export class EstudianteController {

  constructor(private readonly servicio:EstudiantesService){}

  // Crear un estudiante
  @Post()
  crearEstudiante( @Body() estudiante:Estudiante ):void{
    this.servicio.crearEstudiante(estudiante);
    
  }

   // Obtiene un estudiante por su id 
   @Get(':identificador')
   obtenerEstudiantePorId( @Param('identificador') idx:number ): Estudiante{
       return this.servicio.obtenerEstudiantePorId(idx);
   }

     // Obtiener todos los estudiantes
     @Get()
     obtenerEstudiante(): Estudiante[] {
         return this.servicio.obtenerEstudiante();
     }

      // Eliminar estudiante
    @Delete(':id')
    eliminarEstudiante(@Param('id') id: number):void{
        this.servicio.eliminarEstudiante(id);
    }
}