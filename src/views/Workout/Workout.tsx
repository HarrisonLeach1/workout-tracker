import React, { useReducer } from "react";
import { StyleSheet, Text, View } from "react-native";
import Timer from "./Timer";
import { RouteComponentProps } from "react-router-native";
import { GetWorkoutQuery, GetWorkoutQueryVariables } from "../../API";
import { getWorkout } from "../../graphql/queries";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { Theme, ActivityIndicator, Button } from "react-native-paper";
import { Exercise } from "../../modules/WorkoutTypes";
import ExerciseInfo from "./ExerciseInfo";
import WorkoutButton from "./WorkoutButton";

export enum ExerciseState {
    Waiting,
    Exercising,
    Break
}

export type Action =
    | { type: "start set" }
    | { type: "finish set" }
    | { type: "end break" };

interface IWorkoutProps extends RouteComponentProps {
    workoutId: string;
    theme: Theme;
}

type WorkoutState = {
    exerciseIndex: number;
    setNumber: number;
    timerIsActive: boolean;
    timerIsDecrementing: boolean;
    workoutFinished: boolean;
    exerciseState: ExerciseState;
};

const initialWorkoutState = {
    exerciseIndex: 0,
    setNumber: 1,
    timerIsActive: false,
    timerIsDecrementing: false,
    workoutFinished: false,
    exerciseState: ExerciseState.Waiting
};

function reducer(state: WorkoutState, action: Action): WorkoutState {
    switch (action.type) {
        case "start set":
            return {
                ...state,
                timerIsActive: true,
                timerIsDecrementing: false,
                exerciseState: ExerciseState.Exercising
            };
        case "finish set":
            let newSetNumber: number = state.setNumber + 1;
            let newExerciseIndex: number = state.exerciseIndex;
            let newWorkoutFinished: boolean = state.workoutFinished;

            if (state.setNumber >= 3) {
                newSetNumber = 1;
                newExerciseIndex++;
                if (newExerciseIndex >= 4) {
                    newWorkoutFinished = true;
                }
            }

            return {
                ...state,
                timerIsDecrementing: true,
                setNumber: newSetNumber,
                exerciseIndex: newExerciseIndex,
                workoutFinished: newWorkoutFinished,
                exerciseState: ExerciseState.Break
            };

        case "end break":
            return {
                ...state,
                timerIsActive: false,
                exerciseState: ExerciseState.Waiting
            };
        default:
            throw new Error();
    }
}

const Workout = ({ history, workoutId, theme }: IWorkoutProps) => {
    const { loading, error, data } = useQuery<
        GetWorkoutQuery,
        GetWorkoutQueryVariables
    >(gql(getWorkout), {
        variables: {
            id: workoutId
        }
    });

    const [state, dispatch] = useReducer(reducer, initialWorkoutState);

    const currentExercise: Exercise = data
        ? data.getWorkout.exercises.items[state.exerciseIndex]
        : null;

    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator
                    size={"large"}
                    animating={true}
                    color={theme.colors.primary}
                />
            ) : data ? (
                <React.Fragment>
                    <View style={styles.timerContainer}>
                        <Timer
                            initialTimeInSeconds={
                                state.timerIsDecrementing ? 60 : 0
                            }
                            isActive={state.timerIsActive}
                            isDecrementing={state.timerIsDecrementing}
                            onZeroReached={() => {
                                dispatch({ type: "end break" });
                            }}
                        />
                    </View>
                    <WorkoutButton
                        exerciseState={state.exerciseState}
                        dispatch={dispatch}
                    />
                    <View style={styles.workoutInfoContainer}>
                        {state.workoutFinished ? (
                            <Text>Workout Finished!</Text>
                        ) : (
                            <ExerciseInfo
                                exercise={currentExercise}
                                setNumber={state.setNumber}
                            />
                        )}
                        <Button onPress={() => history.push("/")}>
                            Go Back
                        </Button>
                    </View>
                </React.Fragment>
            ) : (
                <Text> Error Loading Workout </Text>
            )}
        </View>
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
    },
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fff",
        alignItems: "stretch",
        justifyContent: "center"
    }
});

export default Workout;
