import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Timer from "./Timer";
import { RouteComponentProps } from "react-router-native";
import { GetWorkoutQuery, GetWorkoutQueryVariables } from "../../API";
import { getWorkout } from "../../graphql/queries";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { Theme, ActivityIndicator } from "react-native-paper";

interface IWorkoutProps extends RouteComponentProps {
    workoutId: string;
    theme: Theme;
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
                            initialTimeInSeconds={6}
                            initialIsActive={true}
                        />
                    </View>
                    <View style={styles.workoutInfoContainer}>
                        {data.getWorkout.exercises.items[0] ? (
                            <React.Fragment>
                                <Text>
                                    {data.getWorkout.exercises.items[0].name}
                                </Text>
                                <Text>
                                    Set: {1} /{" "}
                                    {data.getWorkout.exercises.items[0].sets}
                                </Text>
                                <Text>
                                    Weight:{" "}
                                    {
                                        data.getWorkout.exercises.items[0]
                                            .weightInKg
                                    }{" "}
                                    Kg
                                </Text>
                                <Text>
                                    Reps:{" "}
                                    {
                                        data.getWorkout.exercises.items[0]
                                            .repetitions
                                    }
                                </Text>
                            </React.Fragment>
                        ) : (
                            <Text>No Exercises in this Workout</Text>
                        )}
                        <Button
                            onPress={() => history.push("/")}
                            title="Go Back"
                        />
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
