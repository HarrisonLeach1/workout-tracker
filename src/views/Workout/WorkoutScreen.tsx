import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Timer from "./Timer";
import { GetWorkoutQuery, GetWorkoutQueryVariables } from "../../API";
import { getWorkout } from "../../graphql/queries";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import {
    Theme,
    ActivityIndicator,
    Button,
    withTheme
} from "react-native-paper";
import {
    Exercise,
    ExerciseState,
    WorkoutState,
    Action
} from "../../modules/WorkoutTypes";
import ExerciseInfo from "./ExerciseInfo";
import WorkoutButton from "./WorkoutButton";
import { useImmerReducer } from "use-immer";
import { useNavigation } from "../../modules/NavigationTypes";
import { NavigationScreenProp, NavigationState } from "react-navigation";

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
interface NavigationParams {
    workoutId: string;
}

type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

const WorkoutScreen = ({ theme }) => {
    const navigation = useNavigation<NavigationParams>();

    const { loading, error, data } = useQuery<
        GetWorkoutQuery,
        GetWorkoutQueryVariables
    >(gql(getWorkout), {
        variables: {
            id: navigation.state.params.workoutId
        }
    });

    const [state, dispatch] = useImmerReducer(reducer, initialWorkoutState);

    const currentExercise: Exercise = data
        ? data.getWorkout.exercises.items[state.exerciseIndex]
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
                        <Button onPress={() => navigation.navigate("Home")}>
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
