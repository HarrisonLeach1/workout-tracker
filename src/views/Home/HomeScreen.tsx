import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Theme, withTheme } from "react-native-paper";
import WorkoutList from "./WorkoutList";
import { NavigationProps } from "../../modules/NavigationTypes";

interface IHomeScreenProps extends NavigationProps {
    theme: Theme;
}

const HomeScreen = (props: IHomeScreenProps) => {
    static navigationOptions = {
        title: 'Home',
      };
      
    return (
        <View style={styles.container}>
            <View style={styles.graph}>
                <Text>Graph</Text>
            </View>
            <WorkoutList {...props} theme={props.theme} />
        </View>
    );
};

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

export default withTheme(HomeScreen);
