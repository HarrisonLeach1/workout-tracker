import { createContext } from "react";
import { CreateRoutineInput, CreateExerciseInput } from "../API";

export interface RoutineInputs {
    createRoutineInput: CreateRoutineInput;
    createExercisesInput: CreateExerciseInput[];
}

export interface CreateRoutineContextProps {
    routine: RoutineInputs;
    setRoutine: React.Dispatch<React.SetStateAction<RoutineInputs>>;
}

export const CreateRoutineContext = createContext(null);
