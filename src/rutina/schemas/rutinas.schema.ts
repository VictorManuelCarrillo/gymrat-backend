import { Schema } from 'mongoose';

export const RutinaSchema = new Schema({
  name: { type: String, required: false },
  description: String,
  imageUrl: { type: String, required: false },
  createAt: { type: Date, default: Date.now },
});
