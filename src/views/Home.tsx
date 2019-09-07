import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { List, Divider, FAB, ActivityIndicator } from "react-native-paper";
import { listWorkouts } from "../graphql/queries";
import { useQuery } from "@apollo/react-hooks";
import { ListWorkoutsQuery, ListWorkoutsQueryVariables } from "../API";
import gql from "graphql-tag";

const Home = ({ history, theme }) => {
    const { colors } = theme;

    const { loading, error, data } = useQuery<
        ListWorkoutsQuery,
        ListWorkoutsQueryVariables
    >(gql(listWorkouts), {
        variables: { limit: 5 }
    });

    return (
        <View style={styles.container}>
            <View style={styles.graph}>
                <Text>Graph</Text>
            </View>
            <View style={styles.container}>
                {loading ? (
                    <ActivityIndicator
                        size={"large"}
                        animating={true}
                        color={colors.primary}
                    />
                ) : data ? (
                    <React.Fragment>
                        <FlatList
                            renderItem={({ item }) => (
                                <List.Item title={item.name} />
                            )}
                            keyExtractor={item => item.id}
                            ItemSeparatorComponent={Divider}
                            data={data.listWorkouts.items}
                        />
                        <FAB
                            style={styles.fab}
                            icon="add"
                            onPress={() => history.push("/CreateWorkout")}
                        />
                    </React.Fragment>
                ) : (
                    <Text> Error Loading Workouts </Text>
                )}
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
