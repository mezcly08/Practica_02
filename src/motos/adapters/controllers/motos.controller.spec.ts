import { Test, TestingModule } from '@nestjs/testing';
import { MotosController } from './motos.controller';
import { MotosService } from '../../domain/services/motos.service';

describe('AppController', () => {
  let appController: MotosController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MotosController],
      providers: [MotosService],
    }).compile();

    appController = app.get<MotosController>(MotosController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});