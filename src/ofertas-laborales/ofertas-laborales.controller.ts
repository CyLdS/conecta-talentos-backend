import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { OfertasLaboralesService } from './ofertas-laborales.service';
import { OfertaLaboral } from 'src/ofertaLaboral';

@Controller('ofertas-laborales')
export class OfertasLaboralesController {
    constructor(private readonly servicio:OfertasLaboralesService){}

     // Crear una oferta
  @Post()
  crearOferta( @Body() oferta:OfertaLaboral ):void{
    this.servicio.crearOferta(oferta);
    
  }

  // Obtiene una oferta por su id 
  @Get(':id')
  obtenerOfertaPorId( @Param('id') id:number ): OfertaLaboral{
      return this.servicio.obtenerOfertaPorId(id);
  }

    // Obtiener todos las ofertas
    @Get()
    obtenerOfertas(): OfertaLaboral[] {
        return this.servicio.obtenerOfertasLaborales();
    }

       // Eliminar oferta
       @Delete(':id')
       eliminarOferta(@Param('id') id: number):void{
           this.servicio.eliminarOfertaLaboral(id);
       }



}
