import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudianteController } from './estudiantes/estudiantes.controller';
import { EstudiantesService } from './estudiantes/estudiantes.service';

@Module({
  imports: [],
  controllers: [AppController, EstudianteController],
  providers: [AppService, EstudiantesService],
})
export class AppModule {}
