import { Module } from '@nestjs/common';
import { MotosControllerImpl } from './motos/adapters/controllers/motosImpl.controller';
import { MotosServiceImpl } from './motos/domain/services/motosImpl.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MotosEntity } from './motos/domain/entities/motos.entity';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://mezcly08:gqqoyGVykA8zfS3N@cluster0.gc3de9t.mongodb.net/?retryWrites=true&w=majority',
      useNewUrlParser: true,
      useUnifiedTopology: true,
      synchronize: true, // Solo para desarrollo
      logging: true,
      autoLoadEntities: true,
      //ssl: true,
    }),
    TypeOrmModule.forFeature([MotosEntity]),
    UsersModule,
  ],
  controllers: [MotosControllerImpl],
  providers: [
    {
      provide: 'MotosService',
      useClass: MotosServiceImpl,
    },
  ],
})
export class AppModule {}