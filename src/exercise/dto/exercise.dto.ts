//? aquí se define lo que se envía entre el cliente y el servidor
//? lo que se esta recibiendo y enviando
export class CreateExerciseDto {
  readonly name: string;
  readonly description: string;
  readonly series: number;
  readonly imageUrl: string;
  readonly createdAt: Date;
  readonly title: string;
}
