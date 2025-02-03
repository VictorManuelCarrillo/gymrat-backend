import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Exercise } from './interfaces/exercise.interface';
import { CreateExerciseDto } from './dto/exercise.dto';
// clase que puede compartir los métodos con otras clases
@Injectable()
export class ExerciseService {
  constructor(@InjectModel('Exercise') private readonly exerciseModel: Model<Exercise>) {}

  async getExercises(): Promise<Exercise[]> {
    const exercises = await this.exerciseModel.find();
    return exercises;
  }

  async getExercise(exerciseID): Promise<Exercise> {
    const exercise = await this.exerciseModel.findById(exerciseID);
    if (!exercise) {
      throw new Error('Exercise not found');
    }
    return exercise;
  }

  async createExercise(createExerciseDto: CreateExerciseDto): Promise<Exercise> {
    const createdExercise = new this.exerciseModel(createExerciseDto);
    return await createdExercise.save();
  }

  async updateExercise(exerciseID: string, createExerciseDto: CreateExerciseDto): Promise<Exercise> {
    const updatedExercise = await this.exerciseModel.findByIdAndUpdate(exerciseID, createExerciseDto, { new: true });
    if (!updatedExercise) {
      throw new Error('Exercise not found');
    }
    return updatedExercise;
  }

  async deleteExercise(exerciseID: string): Promise<Exercise> {
    const deletedExercise = await this.exerciseModel.findByIdAndDelete(exerciseID);
    if (!deletedExercise) {
      throw new Error('Exercise not found');
    }
    return deletedExercise;
  }
}
