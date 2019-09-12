import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { Appbar } from "react-native-paper";
import HomeScreen from "./views/Home/HomeScreen";
import CreateWorkoutScreen from "./views/Create/CreateWorkoutScreen";
import CreateExerciseScreen from "./views/Create/CreateExercise";
import WorkoutScreen from "./views/Workout/WorkoutScreen";

export const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        CreateWorkout: CreateWorkoutScreen,
        CreateExercise: CreateExerciseScreen,
        Workout: WorkoutScreen
    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: ({ navigation }) => {
            return {
                header: (
                    <Appbar.Header>
                        <Appbar.Content title="Home" />
                    </Appbar.Header>
                )
            };
        }
    }
);
