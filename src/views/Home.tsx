import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Theme } from "react-native-paper";
import WorkoutList from "../components/WorkoutList";
import { RouteComponentProps } from "react-router";

interface IHomeProps extends RouteComponentProps {
    theme: Theme;
    onWorkoutPress: (workoutId: string) => void;
}

const Home = (props: IHomeProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.graph}>
                <Text>Graph</Text>
            </View>
            <WorkoutList {...props} />
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fff",
        alignItems: "stretch",
        justifyContent: "center"
    },
    graph: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
