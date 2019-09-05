import React from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { NativeRouter, Route, Switch } from "react-router-native";
import Workout from "./views/Workout";
import Home from "./views/Home";
import { DummyData } from "./modules/DummyData";
import CreateWorkout from "./views/CreateWorkout";

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
