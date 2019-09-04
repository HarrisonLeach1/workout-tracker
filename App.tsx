import React from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { NativeRouter, Route, Switch } from "react-router-native";
import Workout from "./Workout";
import Home from "./Home";

let dummyData: Workout = {
    exercises: [
        {
            title: "Barbell Rows",
            sets: 5,
            repetitions: 6,
            weightInKg: 60
        }
    ]
};

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
                            <Workout {...props} workout={dummyData} />
                        )}
                    />
                </Switch>
            </NativeRouter>
        </PaperProvider>
    );
}

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: "tomato",
        accent: "yellow"
    }
};
