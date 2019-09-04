import React from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { List, Divider } from "react-native-paper";
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
