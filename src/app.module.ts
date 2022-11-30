import { Module } from '@nestjs/common';
import { MotosController } from './motos/adapters/controllers/motos.controller';
import { MotosService } from './motos/domain/services/motos.service';

@Module({
  imports: [],
  controllers: [MotosController],
  providers: [MotosService],
})
export class AppModule {}
