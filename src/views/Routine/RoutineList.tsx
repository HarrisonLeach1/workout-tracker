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
import { ListRoutinesQueryVariables, ListRoutinesQuery } from "../../API";
import gql from "graphql-tag";
import { listRoutines } from "../../graphql/queries";
import { useQuery } from "@apollo/react-hooks";
import { SelectedRoutineContext } from "../../contexts/InProgressWorkoutContext";
import RoutinePreviewCard from "./RoutinePreviewCard";

interface IRoutineListProps extends RouteComponentProps {
    theme: Theme;
}

const RoutineList: React.FC<IRoutineListProps> = ({
    history,
    theme
}: IRoutineListProps) => {
    const { loading, error, data } = useQuery<
        ListRoutinesQuery,
        ListRoutinesQueryVariables
    >(gql(listRoutines), {
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
                            <RoutinePreviewCard
                                onPress={() => {
                                    setRoutineID(item.id);
                                    history.push("/Workout");
                                }}
                                routine={item}
                                theme={theme}
                            />
                        )}
                        keyExtractor={item => item.id}
                        ItemSeparatorComponent={Divider}
                        data={data.listRoutines.items}
                    />
                    <FAB
                        style={styles.fab}
                        icon="plus"
                        onPress={() => history.push("/CreateRoutine")}
                    />
                </React.Fragment>
            ) : (
                <Text> Error Loading Routines </Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "center"
    },
    fab: {
        position: "absolute",
        margin: 24,
        right: 0,
        bottom: 0
    }
});

export default withTheme(RoutineList);
