import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Estudiante } from 'src/estudiante';
import { EstudiantesService } from './estudiantes.service';

@Controller('estudiantes')
export class EstudianteController {

  constructor(private readonly servicio:EstudiantesService){}

  // Crear un estudiante
  @Post()
  crearEstudiante( @Body() estudiante:Estudiante ):void{
    this.servicio.crearEstudiante(estudiante);
    
  }

   // Obtiene un estudiante por su id 
   @Get(':id')
   obtenerEstudiantePorId( @Param('id') id:number ): Estudiante{
       return this.servicio.obtenerEstudiantePorId(id);
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