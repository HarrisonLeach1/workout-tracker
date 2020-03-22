export type Routine = {
  __typename: "Routine";
  id: string;
  name: string;
  exercises: { items?: Exercise[]; __typename: "ModelExerciseConnection"; nextToken: string };
  workouts: { __typename: "ModelWorkoutConnection"; nextToken: string };
};

export type Workout = {
  __typename: "Workout";
  id: string;
  routine: {
    __typename: "Routine";
    id: string;
    name: string | null;
    exercises?: {
      __typename: "ModelExerciseConnection";
      nextToken: string | null;
    };
    workouts?: {
      __typename: "ModelWorkoutConnection";
      nextToken: string | null;
    };
  };
  startedAt: string;
  completedAt: string | null;
  exerciseResults: {
    __typename: "ModelExerciseResultConnection";
    items: Array<{
      __typename: "ExerciseResult";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
} | null;

export type Exercise = {
  id: string;
  name: string;
  sets: number;
  repetitions: number;
  weightInKg: number;
};
