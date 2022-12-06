import { MotosEntity } from 'src/motos/domain/entities/motos.entity';

export interface MotosController {
   /**
    *  Retorna la lista de motos
    */
   listarMotos();

   /**
    * Crea un moto
    * @param datos Objeto con datos de moto
    */
   crear(datos: MotosEntity);

   /**
    * Modifica datos de un moto
    * @param datos Objeto con datos de la moto
    * @param id Identificador único de la moto
    */
   modificar(datos: MotosEntity, id: number);

   /**
    * Elimina un moto
    * @param id Identificador único de la moto
    */
   eliminar(id: number);

   /**
    * Cambia el anio de una moto
    * @param id Identificador único de la moto
    * @param anio año de la moto
    */
   cambiarEdad(id: number, anio: number);

}