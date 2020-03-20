import { createContext, useState } from "react";
import { CreateWorkoutInput, CreateExerciseResultInput, CreateSetInput } from "../API";

export interface WorkoutInputs {
    createWorkoutInput: CreateWorkoutInput;
    exerciseResultInputs: ExerciseResultInput[]; 
}

export interface ExerciseResultInput {
    createExerciseResultInput: CreateExerciseResultInput;
    createSetInputs: CreateSetInput[];
}

export function useSelectedRoutine() {
    const [routineID, setRoutineID] = useState<string>("");
    return { routineID, setRoutineID };
}

export const SelectedRoutineContext = createContext(null);
