import React, { useState, useMemo } from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { NativeRouter, Route, Switch } from "react-router-native";
import Workout from "./src/views/Workout";
import Home from "./src/views/Home";
import { DummyData } from "./src/modules/DummyData";
import CreateWorkout from "./src/views/CreateWorkout";
import CreateExercise from "./src/views/CreateExercise";
import { WorkoutContext, WorkoutInputs } from "./src/modules/WorkoutContext";
import { ApolloProvider } from "@apollo/react-hooks";
import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync";
import awsconfig from "./aws-exports";
import ApolloClient from "apollo-boost";

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

    return (
        <PaperProvider theme={theme}>
            <NativeRouter>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={props => <Home {...props} theme={theme} />}
                    />
                    <Route
                        exact
                        path="/Workout"
                        render={props => (
                            <Workout {...props} workout={DummyData[0]} />
                        )}
                    />
                    <WorkoutContext.Provider value={workoutValue}>
                        <Route
                            exact
                            path="/CreateWorkout"
                            component={CreateWorkout}
                        />
                        <Route
                            exact
                            path="/CreateExercise"
                            component={CreateExercise}
                        />
                    </WorkoutContext.Provider>
                </Switch>
            </NativeRouter>
        </PaperProvider>
    );
};

const WithProvider = () => (
    // TODO: Fix cast here by adding properties to client
    <ApolloProvider client={client as any}>
        <App />
    </ApolloProvider>
);

export default WithProvider;

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors
    }
};
