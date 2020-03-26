import { CreateExerciseResultInput, CreateWorkoutInput, CreateSetInput, CreateRoutineInput, CreateExerciseInput } from "../API";

export interface WorkoutInputs {
  createWorkoutInput: CreateWorkoutInput;
  exerciseResultInputs: ExerciseResultInput[];
}

export interface ExerciseResultInput {
  createExerciseResultInput: CreateExerciseResultInput;
  createSetInputs: CreateSetFormInput[];
}

export interface CreateSetFormInput extends CreateSetInput {
  targetWeightInKg?: number;
  targetRepetitions?: number;
}

export interface RoutineInputs {
  createRoutineInput: CreateRoutineInput;
  createExercisesInput: CreateExerciseInput[];
}
