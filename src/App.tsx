import React, { useState, useMemo } from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { NativeRouter, Route, Switch } from "react-router-native";
import WorkoutScreen from "./views/Workout/WorkoutScreen";
import HomeScreen from "./views/Home/HomeScreen";
import CreateWorkoutScreen from "./views/Create/CreateWorkoutScreen";
import CreateExerciseScreen from "./views/Create/CreateExerciseScreen";
import { WorkoutContext, WorkoutInputs } from "./modules/WorkoutContext";
import { ApolloProvider } from "@apollo/react-hooks";
import awsconfig from "../aws-exports";
import ApolloClient from "apollo-boost";
import { registerRootComponent } from "expo";
import Stack from "react-router-native-stack";
import { SelectedRoutineContext } from "./modules/SelectedRoutineContext";
import CreateWorkoutHeader from "./views/Create/CreateWorkoutHeader";

const client = new ApolloClient({
    uri: awsconfig.aws_appsync_graphqlEndpoint,
    headers: {
        "X-Api-Key": awsconfig.aws_appsync_apiKey
    }
});

const App = () => {
    const [workout, setWorkout] = useState<WorkoutInputs>({
        createWorkoutInput: {
            name: ""
        },
        createExercisesInput: []
    });

    const workoutValue = useMemo(() => ({ workout, setWorkout }), [
        workout,
        setWorkout
    ]);

    const [routineID, setRoutineID] = useState<string>("");

    const routineIDValue = useMemo(() => ({ routineID, setRoutineID }), [
        routineID,
        setRoutineID
    ]);

    return (
        <PaperProvider theme={theme}>
            <SelectedRoutineContext.Provider value={routineIDValue}>
                <WorkoutContext.Provider value={workoutValue}>
                    <NativeRouter>
                        <Stack style={{ alignItems: "flex-start" }}>
                            <Route exact path="/" component={HomeScreen} />
                            <Route
                                exact
                                path="/Workout"
                                component={WorkoutScreen}
                            />
                            <Route
                                exact
                                path="/CreateWorkout"
                                component={CreateWorkoutScreen}
                            />
                            <Route
                                exact
                                path="/CreateExercise"
                                animationType="slide-vertical"
                                component={CreateExerciseScreen}
                            />
                        </Stack>
                    </NativeRouter>
                </WorkoutContext.Provider>
            </SelectedRoutineContext.Provider>
        </PaperProvider>
    );
};

const WithProvider = () => (
    // TODO: Fix cast here by adding properties to client
    <ApolloProvider client={client as any}>
        <App />
    </ApolloProvider>
);

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: "#00838f",
        accent: "#4fb3bf"
    }
};

export default registerRootComponent(WithProvider);
