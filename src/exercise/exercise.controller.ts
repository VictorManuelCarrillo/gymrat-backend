// Controller - maneja las direcciones que pasan por nuestro servidor
import {
  Controller,
  Post,
  HttpStatus,
  Res,
  Body,
  Get,
  Param,
  NotFoundException,
  Delete,
  Query,
  Put,
} from '@nestjs/common';
// Type para el @res
import { Response } from 'express';
// DTO class
import { CreateExerciseDto } from './dto/exercise.dto';
// service
import { ExerciseService } from './exercise.service';
@Controller('exercise')
export class ExerciseController {
  constructor(private exerciseService: ExerciseService) {}

  // POST --
  @Post('/create')
  async createExercise(
    @Res() res: Response,
    @Body() createExerciseDto: CreateExerciseDto,
  ) {
    const createdExercise =
      await this.exerciseService.createExercise(createExerciseDto);
    return res.status(HttpStatus.OK).json({
      message: 'Product successfully created',
      createdExercise,
    });
  }
  // GET --
  @Get('/')
  async getExercises(@Res() res: Response) {
    const exercises = await this.exerciseService.getExercises();
    return res.status(HttpStatus.OK).json(exercises);
  }
  // GET SINGLE --
  @Get('/:exerciseID')
  async getExercise(@Res() res: Response, @Param('exerciseID') exerciseID) {
    const exercise = await this.exerciseService.getExercise(exerciseID);
    if (!exercise) throw new NotFoundException('exercise does not exist');
    return res.status(HttpStatus.OK).json(exercise);
  }
  // DELETE --
  @Delete('/delete')
  async deleteExercise(
    @Res() res: Response,
    @Query('exerciseID') exerciseID: string,
  ) {
    const deletedExercise =
      await this.exerciseService.deleteExercise(exerciseID);
    if (!deletedExercise) throw new NotFoundException('exercise not found');
    return res.status(HttpStatus.OK).json({
      message: 'exercise deleted successfully',
      deletedExercise,
    });
  }
  // UPDATE --
  @Put('/update')
  async updateExercise(
    @Res() res: Response,
    @Body() createExerciseDto: CreateExerciseDto,
    @Query('exerciseID') exerciseID: string,
  ) {
    const updatedExercise = await this.exerciseService.updateExercise(
      exerciseID,
      createExerciseDto,
    );
    if (!updatedExercise)
      throw new NotFoundException('Exercise does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Exercise updated successfully',
      updatedExercise,
    });
  }
}
