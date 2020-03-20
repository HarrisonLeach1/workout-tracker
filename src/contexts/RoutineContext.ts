import { createContext, useState } from "react";
import { CreateRoutineInput, CreateExerciseInput } from "../API";

export interface RoutineInputs {
    createRoutineInput: CreateRoutineInput;
    createExercisesInput: CreateExerciseInput[];
}

export interface CreateRoutineContextProps {
    routine: RoutineInputs;
    setRoutine: React.Dispatch<React.SetStateAction<RoutineInputs>>;
}

export function useCreateRoutineContext() {
    const [routine, setRoutine] = useState<RoutineInputs>({
        createRoutineInput: {
            name: ""
        },
        createExercisesInput: []
    });
    return { routine, setRoutine };
}

export const CreateRoutineContext = createContext(null);
