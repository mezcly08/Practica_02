import {Motos} from '../../domain/models/motos.model';

export interface MotosController {
   /**
    *  Retorna la lista de motos
    */
   listarMotos();

   /**
    * Crea un moto
    * @param datos Objeto con datos de moto
    */
   crear(datos: Motos);

   /**
    * Modifica datos de un moto
    * @param datos Objeto con datos de la moto
    * @param id Identificador único de la moto
    */
   modificar(datos: Motos, id: number);

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