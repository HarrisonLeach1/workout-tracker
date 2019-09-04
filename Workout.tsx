import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Timer from "./Timer";
import { RouteComponentProps } from "react-router-native";

interface IWorkoutProps extends RouteComponentProps {
    workout: Workout;
}

const Workout = ({ history, workout }: IWorkoutProps) => {
    const [currentExercise, setCurrentExercise] = useState<Exercise>(
        workout.exercises[0]
    );
    const [currentSet, setCurrentSet] = useState(1);

    return (
        <React.Fragment>
            <View style={styles.timerContainer}>
                <Timer initialTimeInSeconds={6} initialIsActive={true} />
            </View>
            <View style={styles.workoutInfoContainer}>
                <Text>{currentExercise.title}</Text>
                <Text>
                    Set: {currentSet} / {currentExercise.sets}
                </Text>
                <Text>Weight: {currentExercise.weightInKg} Kg</Text>
                <Text>Reps: {currentExercise.repetitions}</Text>
                <Button onPress={() => history.push("/")} title="Go Back" />
            </View>
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    workoutInfoContainer: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    timerContainer: {
        flex: 2,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});

export default Workout;
