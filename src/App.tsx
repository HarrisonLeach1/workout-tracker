import React from "react";
import {
    DefaultTheme,
    Provider as PaperProvider,
    Appbar
} from "react-native-paper";
import CreateWorkoutScreen from "./views/Create/CreateWorkoutScreen";
import CreateExerciseScreen from "./views/Create/CreateExercise";
import { ApolloProvider } from "@apollo/react-hooks";
import awsconfig from "../aws-exports";
import ApolloClient from "apollo-boost";
import { registerRootComponent } from "expo";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./views/Home/HomeScreen";
import WorkoutScreen from "./views/Workout/WorkoutScreen";

const client = new ApolloClient({
    uri: awsconfig.aws_appsync_graphqlEndpoint,
    headers: {
        "X-Api-Key": awsconfig.aws_appsync_apiKey
    }
});

const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        CreateWorkout: CreateWorkoutScreen,
        CreateExercise: CreateExerciseScreen,
        Workout: WorkoutScreen
    },
    {
        initialRouteName: "Home"
    }
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
    return (
        <PaperProvider theme={theme}>
            <AppContainer />
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
