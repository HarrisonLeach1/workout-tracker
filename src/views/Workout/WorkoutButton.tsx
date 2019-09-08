import React from "react";
import { ExerciseState, Action } from "./Workout";
import { Button } from "react-native-paper";
import { Text } from "react-native";

interface IWorkoutButtonProps {
    exerciseState: ExerciseState;
    dispatch: (action: Action) => void;
}

const WorkoutButton: React.FC<IWorkoutButtonProps> = ({
    exerciseState,
    dispatch
}) => {
    switch (exerciseState) {
        case ExerciseState.Waiting:
            return (
                <Button
                    onPress={() => {
                        dispatch({ type: "start set" });
                    }}
                >
                    Start Set
                </Button>
            );
        case ExerciseState.Exercising:
            return (
                <Button
                    onPress={() => {
                        dispatch({ type: "finish set" });
                    }}
                >
                    Finish Set
                </Button>
            );
        case ExerciseState.Break:
            return (
                <Button disabled={true} onPress={() => {}}>
                    Break
                </Button>
            );
        default:
            return <Text> Error </Text>;
    }
};

export default WorkoutButton;
