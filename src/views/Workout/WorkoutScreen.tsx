import { Theme, Appbar, withTheme, ActivityIndicator } from "react-native-paper";
import { RouteComponentProps } from "react-router";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import React, { useContext } from "react";
import { GetRoutineQuery, GetRoutineQueryVariables } from "../../API";
import gql from "graphql-tag";
import { SelectedRoutineContext } from "../../contexts/InProgressWorkoutContext";
import { useQuery } from "@apollo/react-hooks";
import { getRoutineAndExercises } from "../../customGraphql/customQueries";
import WorkoutTable from "./WorkoutTable";

interface IWorkoutTableProps extends RouteComponentProps {
  theme: Theme;
}

const WorkoutScreen: React.FC<IWorkoutTableProps> = ({ history, theme }: IWorkoutTableProps) => {
  const { routineID } = useContext(SelectedRoutineContext);

  const { loading, data } = useQuery<GetRoutineQuery, GetRoutineQueryVariables>(gql(getRoutineAndExercises), {
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
      <ScrollView style={styles.container} keyboardShouldPersistTaps={"always"} removeClippedSubviews={false}>
        {loading ? (
          <ActivityIndicator size={"large"} animating={true} color={theme.colors.primary} />
        ) : data ? (
          <WorkoutTable routineData={data} />
        ) : (
          <Text> Error Loading Workout </Text>
        )}
      </ScrollView>
    </View>
  );
};

export default withTheme(WorkoutScreen);

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  screen: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: "#fff"
  },
  numberInput: {
    flex: 1,
    justifyContent: "center"
  },
  TextInputStyle: {
    textAlign: "center",
    height: 40,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#009688",
    marginBottom: 10
  }
});
