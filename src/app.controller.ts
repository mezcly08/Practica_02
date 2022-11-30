import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

interface Moto {
  marca: string,
  precio: number,
  anio: number
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  private Motos : Moto[] = [{
    marca: "Honda Xr",
    precio: 19000000,
    anio: 2019
  }]

  @Get()
  getHello(): Moto[] {
    return this.Motos;
  }

  @Post()
  crear(@Body() datos: Moto): Moto {
    this.Motos.push(datos);
    return datos;
  }

  @Put(":id")
  modificar(@Body() datos: Moto, @Param('id') id: number): Moto | string {
    try{
    this.Motos[id] = datos
    return this.Motos[id];
    }
    catch{
      return `No fue posible modificar al usuario en la posición ${id}`
    }
  }

  @Delete(":id")
  eliminar(@Param('id') id: number){
    try{
      this.Motos = this.Motos.filter((val, index) => index != id);
      return true;
    }
    catch{
      return false;
    }
  }

  @Patch(":id/anio/:anio")
  cambiarEdad(@Param('id') id: number, @Param('anio') anio: number): Moto | string{
    try{
      this.Motos[id].anio = anio;
      return this.Motos[id];
    }
    catch{
      return `No fue posible modificar al usuario en la posición ${id}`
    }
  }
}
