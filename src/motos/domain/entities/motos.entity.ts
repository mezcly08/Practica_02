import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity('motos')
export class MotosEntity {
  @ObjectIdColumn()
  id: number;

  @Column()
  marca: string;

  @Column()
  precio: number;

  @Column()
  anio: number;

}