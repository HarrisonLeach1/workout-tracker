import React, { useState, useMemo } from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { NativeRouter, Route, Switch } from "react-router-native";
import Workout from "./src/views/Workout";
import Home from "./src/views/Home";
import { DummyData } from "./src/modules/DummyData";
import CreateWorkout from "./src/views/CreateWorkout";
import CreateExercise from "./src/views/CreateExercise";
import { WorkoutContext } from "./src/modules/WorkoutContext";
import { ApolloProvider } from "@apollo/react-hooks";
import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync";
import awsconfig from "./aws-exports";
import { CreateWorkoutInput } from "./src/API";

const client = new AWSAppSyncClient({
    url: awsconfig.aws_appsync_graphqlEndpoint,
    region: awsconfig.aws_appsync_region,
    auth: {
        type: AUTH_TYPE.API_KEY, // or type: awsconfig.aws_appsync_authenticationType,
        apiKey: awsconfig.aws_appsync_apiKey
    }
});

const App = () => {
    const [workout, setWorkout] = useState<CreateWorkoutInput>({
        name: "",
        exercises: []
    });
    const workoutValue = useMemo(() => ({ workout, setWorkout }), [
        workout,
        setWorkout
    ]);

    return (
        <PaperProvider theme={theme}>
            <NativeRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
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
    <ApolloProvider client={client}>
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
