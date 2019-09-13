import React, { useContext } from "react";
import { RouteComponentProps } from "react-router";
import { View, FlatList, StyleSheet, Text } from "react-native";
import {
    FAB,
    ActivityIndicator,
    List,
    Theme,
    Divider,
    withTheme
} from "react-native-paper";
import { ListWorkoutsQueryVariables, ListWorkoutsQuery } from "../../API";
import gql from "graphql-tag";
import { listWorkouts } from "../../graphql/queries";
import { useQuery } from "@apollo/react-hooks";
import { SelectedRoutineContext } from "../../modules/SelectedRoutineContext";

interface IWorkoutListProps extends RouteComponentProps {
    theme: Theme;
}

const WorkoutList: React.FC<IWorkoutListProps> = ({
    history,
    theme
}: IWorkoutListProps) => {
    const { loading, error, data } = useQuery<
        ListWorkoutsQuery,
        ListWorkoutsQueryVariables
    >(gql(listWorkouts), {
        variables: { limit: 5 }
    });

    const { routineID, setRoutineID } = useContext(SelectedRoutineContext);

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
                                    setRoutineID(item.id);
                                    history.push("/Workout");
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
                        onPress={() => history.push("/CreateWorkout")}
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
