import { InsertResult, UpdateResult } from 'typeorm';
import { MotosEntity } from '../entities/motos.entity';

export interface MotosService {

   /**
    * Retorna la lista de Motos
    */
   listar(): Promise<MotosEntity[]>;

   /**
    * Crea una nueva moto
    * @param Motos datos del nuevo jugador
    * @return Nuevo jugador
    */
   crear(Motos: MotosEntity): Promise<InsertResult>;

   /**
    * Actualiza datos de jugador
    * @param id Identificador único del jugador
    * @param Motos datos del jugador
    * @return Jugador modificado
    */
   modificar(id: number, Motos: MotosEntity): Promise<UpdateResult>;

   /**
    * Eliminar un jugador
    * @param id Identificador único del jugador
    * @return True si eliminó al jugador
    */
   eliminar(id: number): Promise<boolean> ;

   /**
    * Cambia la edad de un jugador
    * @param id Identificador único del jugador
    * @param age nuevo valor de edad 
    */
   cambiarAnio(id: number, age: number): Promise<UpdateResult>;
}