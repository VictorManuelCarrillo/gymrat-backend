// define lo que se escribe en el código
import { Document } from 'mongoose';

export interface Exercise extends Document {
  readonly name: string;
  readonly description: string;
  readonly series: number;
  readonly imageUrl: string;
  readonly createdAt: Date;
}
