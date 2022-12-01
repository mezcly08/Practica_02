import { Body, Controller, Delete, Get, Inject, Param, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { MotosService } from '../../domain/services/motos.service';

import { Motos } from '../../domain/models/motos.model';
import { MotosController } from './motos.controller';
import { AuthGuard } from '@nestjs/passport';

const errReturn = (e: Error, message: string) => {
  return {
    message: message,
    error: e
  }
}

@Controller()
export class MotosControllerImpl implements MotosController {
  constructor(@Inject('MotosService') private readonly motoService: MotosService) { }

  @Get()
  listarMotos() {
    try{
      return this.motoService.listar();
    }
    catch(e){
      return errReturn(e, "Error al listar de motos");
    }
  }

  @UseGuards(AuthGuard('local'))
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