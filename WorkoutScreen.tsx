import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Timer from './Timer'

interface IWorkoutScreenProps {
    workout: Workout
}

const WorkoutScreen = ({ workout }: IWorkoutScreenProps) => {
    const [currentExercise, setCurrentExercise] = useState<Exercise>(workout.exercises[0]);
    const [currentSet, setCurrentSet] = useState(1);

    return (
        <React.Fragment>
            <View style={styles.timerContainer}>
                <Timer initialTimeInSeconds={6} initialIsActive={true} />
            </View>
            <View style={styles.workoutInfoContainer}>
                <Text>{currentExercise.title}</Text>
                <Text>Set: {currentSet} / {currentExercise.sets}</Text>
                <Text>Weight: {currentExercise.weightInKg} Kg</Text>
                <Text>Reps: {currentExercise.repetitions}</Text>
            </View>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    workoutInfoContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    timerContainer: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default WorkoutScreen;