import { createContext, useState } from "react";
import { RoutineInputs } from "../types/FormInputTypes";

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
