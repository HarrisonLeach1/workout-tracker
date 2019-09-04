import React from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { NativeRouter, Route, Switch } from "react-router-native";
import Workout from "./Workout";
import Home from "./Home";
import { DummyData } from "./DummyData";

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
