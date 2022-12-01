import { Module } from '@nestjs/common';
import { MotosControllerImpl } from './motos/adapters/controllers/motosImpl.controller';
import { MotosServiceImpl } from './motos/domain/services/motosImpl.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [MotosControllerImpl],
  providers: [
    {
      provide: 'MotosService',
      useClass: MotosServiceImpl
    }
  ],
})
export class AppModule {}
