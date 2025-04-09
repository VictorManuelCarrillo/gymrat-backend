import { Module } from '@nestjs/common';
import { RutinasController } from './rutina.controller';
import { RutinasService } from './rutina.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RutinaSchema } from './schemas/rutinas.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Rutinas', schema: RutinaSchema }]),
  ],
  controllers: [RutinasController],
  providers: [RutinasService],
})
export class RutinasModule {}
