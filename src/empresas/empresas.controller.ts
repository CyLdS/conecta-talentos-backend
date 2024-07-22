import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { EmpresasService } from './empresas.service';
import { Empresa } from 'src/empresa';

@Controller('empresas')
export class EmpresasController {
    constructor(private readonly servicio:EmpresasService){}


  // Crear una empresa
  @Post()
  crearEmpresa( @Body() empresa:Empresa ):void{
    this.servicio.crearEmpresa(empresa);
    
  }

   // Obtiene una empresa por su id 
   @Get(':id')
   obtenerEmpresaPorId( @Param('id') id:number ): Empresa{
       return this.servicio.obtenerEmpresaPorId(id);
   }

     // Obtiener todos las empresas
     @Get()
     obtenerEmpresas(): Empresa[] {
         return this.servicio.obtenerEmpresas();
     }

      // Eliminar empresa
    @Delete(':id')
    eliminarEmpresa(@Param('id') id: number):void{
        this.servicio.eliminarEmpresa(id);
    }

}
