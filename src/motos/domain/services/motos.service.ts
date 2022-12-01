import { Motos } from "../models/motos.model";

export interface MotosService {

   /**
    * Retorna la lista de Motos
    */
   listar(): Motos[];

   /**
    * Crea una nueva moto
    * @param Motos datos del nuevo jugador
    * @return Nuevo jugador
    */
   crear(Motos: Motos): Motos;

   /**
    * Actualiza datos de jugador
    * @param id Identificador único del jugador
    * @param Motos datos del jugador
    * @return Jugador modificado
    */
   modificar(id: number, Motos: Motos): Motos

   /**
    * Eliminar un jugador
    * @param id Identificador único del jugador
    * @return True si eliminó al jugador
    */
   eliminar(id: number): boolean

   /**
    * Cambia la edad de un jugador
    * @param id Identificador único del jugador
    * @param age nuevo valor de edad 
    */
   cambiarAnio(id: number, age: number): Motos
}