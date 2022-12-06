import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, MongoRepository, UpdateResult } from 'typeorm';
import { MotosEntity } from '../entities/motos.entity';
import { MotosService } from './motos.service';


@Injectable()
export class MotosServiceImpl implements MotosService {

  constructor(
    @InjectRepository(MotosEntity)
    private readonly repository: MongoRepository<MotosEntity>,
  ) {}

  public async listar() : Promise<MotosEntity[]> {
    return await this.repository.find();
  }

  public async crear(MotoData: MotosEntity): Promise<InsertResult> {
    const newMoto = await this.repository.insert(MotoData);
    return newMoto;
  }

  public async modificar(id: number,motoData: MotosEntity,
  ): Promise<UpdateResult> {
    const updatedMotos = await this.repository.update(id, motoData);
    return updatedMotos;
  }

  public async eliminar(id: number): Promise<boolean> {
    const deleteResult = await this.repository.delete(id);
    return deleteResult.affected > 0;
  }

   public async cambiarAnio(id: number, anio: number): Promise<UpdateResult> {
    const updatedMotos = await this.repository.update(id, { anio: anio });
    return updatedMotos;
  }

}
