import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudianteController } from './estudiantes/estudiantes.controller';
import { EstudiantesService } from './estudiantes/estudiantes.service';
import { EmpresasController } from './empresas/empresas.controller';
import { EmpresasService } from './empresas/empresas.service';

@Module({
  imports: [],
  controllers: [AppController, EstudianteController, EmpresasController],
  providers: [AppService, EstudiantesService, EmpresasService],
})
export class AppModule {}
