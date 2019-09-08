import React, { useState, useMemo } from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { NativeRouter, Route, Switch } from "react-router-native";
import Workout from "./views/Workout/Workout";
import Home from "./views/Home/Home";
import CreateWorkout from "./views/Create/CreateWorkout";
import CreateExercise from "./views/Create/CreateExercise";
import { WorkoutContext, WorkoutInputs } from "./modules/WorkoutContext";
import { ApolloProvider } from "@apollo/react-hooks";
import awsconfig from "../aws-exports";
import ApolloClient from "apollo-boost";
import { registerRootComponent } from "expo";

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

    const [selectedWorkout, setSelectedWorkoutId] = useState<string>("");
    const handleWorkoutPress = (workoutId: string) => {
        setSelectedWorkoutId(workoutId);
    };

    return (
        <PaperProvider theme={theme}>
            <NativeRouter>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={props => (
                            <Home
                                {...props}
                                theme={theme}
                                onWorkoutPress={handleWorkoutPress}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/Workout"
                        render={props => (
                            <Workout
                                {...props}
                                workoutId={selectedWorkout}
                                theme={theme}
                            />
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

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors
    }
};

export default registerRootComponent(WithProvider);
