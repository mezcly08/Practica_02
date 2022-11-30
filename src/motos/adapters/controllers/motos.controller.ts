import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { MotosService } from '../../domain/services/motos.service';

import {Motos} from '../../domain/models/motos.model';

const errReturn = (e: Error, message: string) => {
  return {
    message: message,
    error: e
  }
}

@Controller()
export class MotosController {
  constructor(private readonly motoService: MotosService) { }

  @Get()
  getHello() {
    try{
      return this.motoService.listar();
    }
    catch(e){
      return errReturn(e, "Error al listar de motos");
    }
  }

  @Post()
  crear(@Body() datos: Motos) {
    try{
      return this.motoService.crear(datos);
    }
    catch(e){
      return errReturn(e, "Error al crear Motocicleta");
    }
  }

  @Put(":id")
  modificar(@Body() datos: Motos, @Param('id') id: number) {
    try{
      return this.motoService.modificar(id, datos);
    }
    catch(e){
      return errReturn(e, "Error al modificar Motocicleta");
    }
  }

  @Delete(":id")
  eliminar(@Param('id') id: number) {
    try{
      return this.motoService.eliminar(id);
    }
    catch(e){
      return errReturn(e, "Error al eliminar Motocicleta");
    }
  }

  @Patch(":id/anio/:anio")
  cambiarEdad(@Param('id') id: number, @Param('anio') anio: number) {
    try{
      return this.motoService.cambiarAnio(id, anio);
    }
    catch(e){
      return errReturn(e, "Error al modificar anio de la motocicleta");
    }
  }
}