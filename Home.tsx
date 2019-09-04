import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Home = ({ history }) => {
    return (
        <View style={styles.container}>
            <View>
                <Text>Graph</Text>
            </View>
            <View>
                <Button
                    title="Workout"
                    onPress={() => history.push("/Workout")}
                />
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
