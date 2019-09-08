import React from "react";
import { ExerciseState } from "./Workout";
import { Button } from "react-native";
import console = require("console");

interface IWorkoutButtonProps {
    exerciseState: ExerciseState;
}

const WorkoutButton: React.FC<IWorkoutButtonProps> = ({ exerciseState }) => {
    return <Button onPress={console.log} title="yeet"></Button>;
};
