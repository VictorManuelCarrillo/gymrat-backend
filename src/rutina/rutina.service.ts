import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Rutinas } from './interfaces/rutina.interface';
import { CreateRutinaDto } from './dto/rutina.dto';
@Injectable()
export class RutinasService {
  constructor(
    @InjectModel('Rutinas') private readonly rutinaModel: Model<Rutinas>,
  ) {}

  async getRutinas(): Promise<Rutinas[]> {
    const rutinas = await this.rutinaModel.find();
    return rutinas;
  }
  async getRutina(rutinaID): Promise<Rutinas> {
    const rutina = await this.rutinaModel.findById(rutinaID);
    if (!rutina) {
      throw new Error('no existe rutina ');
    }
    return rutina;
  }
  async createRutina(createRutinaDto: CreateRutinaDto): Promise<Rutinas> {
    const createRutina = new this.rutinaModel(createRutinaDto);
    return await createRutina.save();
  }
  async deleteRutina(rutinaID: string): Promise<Rutinas> {
    const deleteRutine = await this.rutinaModel.findByIdAndDelete(rutinaID);
    if (!deleteRutine) {
      throw new Error('no se encontro la rutina');
    }
    return deleteRutine;
  }
  async updateRutina(
    rutinaID: string,
    createRutinaDto: CreateRutinaDto,
  ): Promise<Rutinas> {
    const updateRutina = await this.rutinaModel.findByIdAndUpdate(
      rutinaID,
      createRutinaDto,
      { new: true },
    );
    if (!updateRutina) {
      throw new Error('no se actulizo');
    }
    return updateRutina;
  }
}
