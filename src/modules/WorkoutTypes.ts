import { CreateWorkoutInput, CreateExerciseInput } from "../API";

export type Workout = {
    __typename: "Workout";
    id: string;
    name: string | null;
    exercises: {
        __typename: "ModelExerciseConnection";
        nextToken: string | null;
    } | null;
};

export type Exercise = {
    id: string;
    name: string;
    sets: number;
    repetitions: number;
    weightInKg: number;
};

export interface WorkoutInputs {
    createWorkoutInput: CreateWorkoutInput;
    createExercisesInput: CreateExerciseInput[];
}

export enum ExerciseState {
    Waiting,
    Exercising,
    Break
}

export type Action =
    | { type: "start set" }
    | { type: "finish set" }
    | { type: "end break" };

export type WorkoutState = {
    exerciseIndex: number;
    setNumber: number;
    timerIsActive: boolean;
    timerIsDecrementing: boolean;
    workoutFinished: boolean;
    exerciseState: ExerciseState;
};
