import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import Timer from "./Timer";
import { RouteComponentProps } from "react-router-native";
import { GetRoutineQuery, GetRoutineQueryVariables } from "../../API";
import { getRoutine } from "../../graphql/queries";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import {
    Theme,
    ActivityIndicator,
    Button,
    withTheme
} from "react-native-paper";
import { Exercise } from "../../types/WorkoutTypes";
import ExerciseInfo from "./ExerciseInfo";
import WorkoutButton from "./WorkoutButton";
import { useImmerReducer } from "use-immer";
import { SelectedRoutineContext } from "../../contexts/InProgressWorkoutContext";

export enum ExerciseState {
    Waiting,
    Exercising,
    Break
}

export type Action =
    | { type: "start set" }
    | { type: "finish set" }
    | { type: "end break" };

interface IWorkoutScreenProps extends RouteComponentProps {
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
            state.timerIsActive = true;
            state.timerIsDecrementing = false;
            state.exerciseState = ExerciseState.Exercising;
            return;
        case "finish set":
            if (state.setNumber >= 3) {
                state.setNumber = 1;
                state.exerciseIndex++;
                if (state.exerciseIndex >= 4) {
                    state.workoutFinished = true;
                }
            } else {
                state.setNumber++;
            }
            state.timerIsDecrementing = true;
            state.exerciseState = ExerciseState.Break;
            return;
        case "end break":
            state.timerIsActive = false;
            state.exerciseState = ExerciseState.Waiting;
            return;
        default:
            throw new Error();
    }
}

const WorkoutScreen = ({ history, theme }: IWorkoutScreenProps) => {
    const { routineID, setRoutineID } = useContext(SelectedRoutineContext);

    const { loading, error, data } = useQuery<
        GetRoutineQuery,
        GetRoutineQueryVariables
    >(gql(getRoutine), {
        variables: {
            id: routineID
        }
    });

    const [state, dispatch] = useImmerReducer(reducer, initialWorkoutState);

    const currentExercise: Exercise = data
        ? data.getRoutine.exercises.items[state.exerciseIndex]
        : null;

    console.log(state);

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
                        <Button onPress={() => history.goBack()}>
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

export default withTheme(WorkoutScreen);