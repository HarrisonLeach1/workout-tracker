import React from "react";
import { Exercise } from "../../modules/WorkoutTypes";
import { Text } from "react-native";

interface IExerciseInfoProps {
    exercise: Exercise;
    setNumber: number;
}

const ExerciseInfo: React.FC<IExerciseInfoProps> = ({
    exercise,
    setNumber
}: IExerciseInfoProps) => {
    if (exercise) {
        return (
            <React.Fragment>
                <Text>{exercise.name}</Text>
                <Text>
                    Set: {setNumber} / {exercise.sets}
                </Text>
                <Text>Weight: {exercise.weightInKg} Kg</Text>
                <Text>Reps: {exercise.repetitions}</Text>
            </React.Fragment>
        );
    }

    return <Text>No Exercises in this Workout</Text>;
};

export default ExerciseInfo;
