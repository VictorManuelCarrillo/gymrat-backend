import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExerciseModule } from './exercise/exercise.module';
//mongoose
import { MongooseModule } from '@nestjs/mongoose';
import { RutinasModule } from './rutina/rutina.module';

@Module({
  // se genera e importa el modulo
  imports: [
    RutinasModule,
    ExerciseModule,
    MongooseModule.forRoot('mongodb://localhost/gymrat-nest'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
