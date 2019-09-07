import { createContext } from "react";
import { CreateWorkoutInput } from "../API";

export interface WorkoutContextProps {
    workout: CreateWorkoutInput;
    setWorkout: React.Dispatch<React.SetStateAction<CreateWorkoutInput>>;
}

export const WorkoutContext = createContext(null);
