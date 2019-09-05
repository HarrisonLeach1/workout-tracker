import React from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { List, Divider, FAB } from "react-native-paper";
import { DummyData } from "./DummyData";

const Home = ({ history }) => {
    return (
        <View style={styles.container}>
            <View style={styles.graph}>
                <Text>Graph</Text>
            </View>
            <FlatList
                renderItem={({ item }) => <List.Item title={item.title} />}
                keyExtractor={item => item.title}
                ItemSeparatorComponent={Divider}
                data={DummyData}
            />
            <FAB
                style={styles.fab}
                icon="add"
                onPress={() => history.push("/CreateWorkout")}
            />
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
    },
    fab: {
        position: "absolute",
        margin: 24,
        right: 0,
        bottom: 0
    }
});
