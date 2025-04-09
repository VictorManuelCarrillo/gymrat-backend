import { Controller, Post, HttpStatus, Res, Body } from '@nestjs/common';
import { Response } from 'express';

import { CreateRutinaDto } from './dto/rutina.dto';
import { RutinasService } from './rutina.service';

@Controller('rutina')
export class RutinasController {
  constructor(private rutinasService: RutinasService) {}
  @Post('/create')
  async createRutina(
    @Res() res: Response,
    @Body() createRutinaDto: CreateRutinaDto,
  ) {
    const createRutina =
      await this.rutinasService.createRutina(createRutinaDto);
    return res
      .status(HttpStatus.OK)
      .json({ message: 'rutine create', createRutina });
  }
}
