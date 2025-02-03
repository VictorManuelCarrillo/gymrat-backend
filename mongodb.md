# instalaciones
- pnpm add @nestjs/mongoose mongoose

# integración
- en app.module.ts
- + import { MongooseModule } from '@nestjs/mongoose';
- + MongooseModule.forRoot('mongodb://localhost/gymrat-nest')

- en exercise.schema.ts
- // esquema para definir como se guardaran los datos
import { Schema } from 'mongoose';

- export const ExerciseSchema = new Schema({
-  name: { type: String, required: true },
-  description: String,
-  series: Number,
-  imageUrl: String,
-  createdAt: {
-    type: Date,
-    default: Date.now,
-  },
- });

- exercise.module.ts

-
