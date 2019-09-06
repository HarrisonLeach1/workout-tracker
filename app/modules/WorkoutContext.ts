import { createContext } from "react";

export interface WorkoutContextProps {
    workout: Workout;
    setWorkout: React.Dispatch<React.SetStateAction<Workout>>;
}

export const WorkoutContext = createContext(null);
