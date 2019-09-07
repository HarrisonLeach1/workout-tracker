import { createContext } from "react";
import { CreateWorkoutInput, CreateExerciseInput } from "../API";

export interface WorkoutInputs {
    createWorkoutInput: CreateWorkoutInput;
    createExercisesInput: CreateExerciseInput[];
}

export interface WorkoutContextProps {
    workout: WorkoutInputs;
    setWorkout: React.Dispatch<React.SetStateAction<WorkoutInputs>>;
}

export const WorkoutContext = createContext(null);
