import {
    DataTable,
    Theme,
    Appbar,
    withTheme,
    ActivityIndicator
} from "react-native-paper";
import { RouteComponentProps } from "react-router";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import React, { useContext } from "react";
import { GetRoutineQuery, GetRoutineQueryVariables } from "../../API";
import { getRoutine } from "../../graphql/queries";
import gql from "graphql-tag";
import { SelectedRoutineContext } from "../../modules/SelectedRoutineContext";
import { useQuery } from "@apollo/react-hooks";

interface IWorkoutTableProps extends RouteComponentProps {
    theme: Theme;
}

const WorkoutTable: React.FC<IWorkoutTableProps> = ({
    history,
    theme
}: IWorkoutTableProps) => {
    const { routineID, setRoutineID } = useContext(SelectedRoutineContext);

    const { loading, error, data } = useQuery<
        GetRoutineQuery,
        GetRoutineQueryVariables
    >(gql(getRoutine), {
        variables: {
            id: routineID
        }
    });

    return (
        <View style={styles.screen}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => history.goBack()} />
                <Appbar.Content title="Workout" />
            </Appbar.Header>
            <ScrollView
                style={styles.container}
                keyboardShouldPersistTaps={"always"}
                removeClippedSubviews={false}
            >
                {loading ? (
                    <ActivityIndicator
                        size={"large"}
                        animating={true}
                        color={theme.colors.primary}
                    />
                ) : data ? (
                    <DataTable>
                        {data.getRoutine.exercises.items.map(
                            (exercise, index) => {
                                const sets = [...Array(exercise.sets)].map(
                                    (e, i) => (
                                        <DataTable.Row key={i}>
                                            <DataTable.Cell>
                                                Set {i}
                                            </DataTable.Cell>
                                            <DataTable.Cell numeric>
                                                {exercise.repetitions}
                                            </DataTable.Cell>
                                            <DataTable.Cell numeric>
                                                {exercise.weightInKg}
                                            </DataTable.Cell>
                                        </DataTable.Row>
                                    )
                                );

                                return (
                                    <React.Fragment>
                                        <DataTable.Header key={index}>
                                            <DataTable.Title>
                                                {exercise.name}
                                            </DataTable.Title>
                                            <DataTable.Title numeric>
                                                Reps
                                            </DataTable.Title>
                                            <DataTable.Title numeric>
                                                Weight
                                            </DataTable.Title>
                                        </DataTable.Header>
                                        {sets}
                                    </React.Fragment>
                                );
                            }
                        )}
                    </DataTable>
                ) : (
                    <Text> Error Loading Workout </Text>
                )}
            </ScrollView>
        </View>
    );
};

export default withTheme(WorkoutTable);

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    container: {
        flex: 1,
        padding: 8,
        backgroundColor: "#fff"
    }
});
