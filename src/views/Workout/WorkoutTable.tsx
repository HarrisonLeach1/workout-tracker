import { Theme, Appbar, withTheme, ActivityIndicator, Divider } from "react-native-paper";
import { RouteComponentProps } from "react-router";
import { View, StyleSheet, Text, ScrollView, SectionList } from "react-native";
import React, { useContext } from "react";
import { GetRoutineQuery, GetRoutineQueryVariables } from "../../API";
import { getRoutine } from "../../graphql/queries";
import gql from "graphql-tag";
import { SelectedRoutineContext } from "../../modules/SelectedRoutineContext";
import { useQuery } from "@apollo/react-hooks";
import { Exercise } from "../../modules/WorkoutTypes";
import SimpleCheckbox from "../../reusableComponents/SimpleCheckbox";
import ListItemRow from "../../reusableComponents/ListItemRow";

interface IWorkoutTableProps extends RouteComponentProps {
  theme: Theme;
}

const WorkoutTable: React.FC<IWorkoutTableProps> = ({ history, theme }: IWorkoutTableProps) => {
  const { routineID } = useContext(SelectedRoutineContext);

  const { loading, data } = useQuery<GetRoutineQuery, GetRoutineQueryVariables>(gql(getRoutine), {
    variables: {
      id: routineID
    }
  });

  interface ExerciseSection {
    title: string;
    data: ISetListItemProps[];
  }

  const getSetListItems = (item: Exercise): ISetListItemProps[] => {
    const sets: ISetListItemProps[] = [];
    for (let i = 1; i <= item.sets; i++) {
      sets.push({
        setNumber: i,
        weight: item.weightInKg,
        reps: item.repetitions
      });
    }

    return sets;
  };

  const exerciseData: ExerciseSection[] = !data
    ? []
    : data.getRoutine.exercises.items.map<ExerciseSection>((item: Exercise) => ({
        title: item.name,
        data: getSetListItems(item)
      }));

  console.log(exerciseData);

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
          <SectionList
            sections={exerciseData}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={Divider}
            SectionSeparatorComponent={Divider}
            renderItem={({ item }) => <SetListItem setNumber={item.setNumber} reps={item.reps} weight={item.weight} />}
            renderSectionHeader={({ section: { title } }) => {
              return (
                <React.Fragment>
                  <ListItemRow>
                    <Text>{title}</Text>
                  </ListItemRow>
                  <ListItemRow>
                    <Text>Set</Text>
                    <Text>Reps</Text>
                    <Text>Weight</Text>
                    <Text>Completed</Text>
                  </ListItemRow>
                </React.Fragment>
              );
            }}
          />
        ) : (
          <Text> Error Loading Workout </Text>
        )}
      </ScrollView>
    </View>
  );
};

export interface ISetListItemProps {
  setNumber: number;
  reps: number;
  weight: number;
}

const SetListItem: React.FC<ISetListItemProps> = props => {
  const { setNumber, reps, weight } = props;

  return (
    <ListItemRow>
      <Text>{setNumber}</Text>
      <Text>{reps}</Text>
      <Text>{weight}</Text>
      <SimpleCheckbox />
    </ListItemRow>
  );
};

export default withTheme(WorkoutTable);

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
  }
});
