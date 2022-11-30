import { Injectable } from '@nestjs/common';
import { Motos } from '../models/motos.model';

@Injectable()
export class MotosService {

  private moto: Motos[] = [{
    marca: 'Vespa Gts 300',
    precio: 17000000,
    anio: 2015,
    team: 'Colombia'
  }]

  public listar() : Motos[] {
    return this.moto
  }

  public crear(motico: Motos): Motos {
    this.moto.push(motico);
    return motico;
  }

  public modificar(id: number, motico: Motos): Motos {
      this.moto[id] = motico
      return this.moto[id];
  }

  public eliminar(id: number): boolean {
    const totalMotosAntes = this.moto.length;
    this.moto = this.moto.filter((val, index) => index != id);
    if(totalMotosAntes == this.moto.length){
      return false;
    }
    else{
      return true;
    }
  }

   public cambiarAnio(id: number, anio: number): Motos {
      this.moto[id].anio = anio;
      return this.moto[id];
   }

}
