import { Schema } from 'mongoose';

export const RutinaSchema = new Schema({
  name: { type: ' string', required: false },
  description: 'string',
  imageUrl: { type: 'string', required: false },
});
