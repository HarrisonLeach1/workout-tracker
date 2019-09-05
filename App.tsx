import React from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { NativeRouter, Route, Switch } from "react-router-native";
import Workout from "./app/views/Workout";
import Home from "./app/views/Home";
import { DummyData } from "./app/modules/DummyData";
import CreateWorkout from "./app/views/CreateWorkout";
import CreateExercise from "./app/views/CreateExercise";

export default function App() {
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
                </Switch>
            </NativeRouter>
        </PaperProvider>
    );
}

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors
    }
};
