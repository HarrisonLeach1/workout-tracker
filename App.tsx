import React, { useState, useMemo } from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { NativeRouter, Route, Switch } from "react-router-native";
import Workout from "./app/views/Workout";
import Home from "./app/views/Home";
import { DummyData } from "./app/modules/DummyData";
import CreateWorkout from "./app/views/CreateWorkout";
import CreateExercise from "./app/views/CreateExercise";
import { WorkoutContext } from "./app/modules/WorkoutContext";

export default function App() {
    const [workout, setWorkout] = useState<Workout>({
        title: "",
        exercises: DummyData[0].exercises
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
}

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors
    }
};
