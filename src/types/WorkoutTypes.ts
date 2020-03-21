export type Routine = {
  __typename: "Routine";
  id: string;
  name: string;
  exercises: { items?: Exercise[]; __typename: "ModelExerciseConnection"; nextToken: string };
  workouts: { __typename: "ModelWorkoutConnection"; nextToken: string };
};

export type Exercise = {
  id: string;
  name: string;
  sets: number;
  repetitions: number;
  weightInKg: number;
};
