import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import {
    FAB,
    ActivityIndicator,
    List,
    Divider,
    withTheme
} from "react-native-paper";
import { ListWorkoutsQueryVariables, ListWorkoutsQuery } from "../../API";
import gql from "graphql-tag";
import { listWorkouts } from "../../graphql/queries";
import { useQuery } from "@apollo/react-hooks";
import { useNavigation } from "../../modules/NavigationTypes";

const WorkoutList = ({ theme }) => {
    const navigation = useNavigation();

    const { loading, error, data } = useQuery<
        ListWorkoutsQuery,
        ListWorkoutsQueryVariables
    >(gql(listWorkouts), {
        variables: { limit: 5 }
    });

    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator
                    size={"large"}
                    animating={true}
                    color={theme.colors.primary}
                />
            ) : data ? (
                <React.Fragment>
                    <FlatList
                        renderItem={({ item }) => (
                            <List.Item
                                onPress={() => {
                                    navigation.navigate("Workout", {
                                        workoutId: item.id
                                    });
                                }}
                                title={item.name}
                            />
                        )}
                        keyExtractor={item => item.id}
                        ItemSeparatorComponent={Divider}
                        data={data.listWorkouts.items}
                    />
                    <FAB
                        style={styles.fab}
                        icon="add"
                        onPress={() => navigation.navigate("CreateWorkout")}
                    />
                </React.Fragment>
            ) : (
                <Text> Error Loading Workouts </Text>
            )}
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
    },
    fab: {
        position: "absolute",
        margin: 24,
        right: 0,
        bottom: 0
    }
});

export default withTheme(WorkoutList);
