import { SectionList, TextInput, Text, StyleSheet } from "react-native";

import { Divider, Button } from "react-native-paper";

import React from "react";

import ListItemRow from "../../reusableComponents/ListItemRow";
import { Formik, FormikProps } from "formik";
import { WorkoutInputs } from "../../contexts/InProgressWorkoutContext";
import SimpleCheckbox from "../../reusableComponents/SimpleCheckbox";
import { useCreateWorkout } from "../../customGraphql/HandleCreateWorkout";
import { GetRoutineQuery, CreateSetInput } from "../../API";
import { mapRoutinetoWorkoutInputs } from "../../mapping/MapRoutineToWorkoutInputs";
import { Exercise } from "../../types/WorkoutTypes";

export interface IWorkoutTableProps {
  routineData: GetRoutineQuery;
}

const WorkoutTable: React.FC<IWorkoutTableProps> = ({ routineData }: IWorkoutTableProps) => {
  const initialValues: WorkoutInputs = mapRoutinetoWorkoutInputs(routineData);

  const [handleCreateWorkout, { loading: loadingCreateWorkout, errors }] = useCreateWorkout();

  interface ExerciseSection {
    title: string;
    exerciseNumber: number;
    data: ISetListItemProps[];
  }

  initialValues.exerciseResultInputs;

  // This is needed to map the routine data to the format required by a SectionList component
  const exerciseData: ExerciseSection[] = routineData.getRoutine.exercises.items.map<ExerciseSection>((item: Exercise, index) => ({
    title: item.name,
    exerciseNumber: index,
    data: initialValues.exerciseResultInputs[index].createSetInputs,
  }));

  return (
    <Formik initialValues={initialValues} onSubmit={values => handleCreateWorkout(values, routineData.getRoutine.exercises.items)}>
      {(formikProps: FormikProps<WorkoutInputs>) => (
          <React.Fragment>
        <SectionList
          sections={exerciseData}
          keyExtractor={(item, index) => item + index.toString()}
          ItemSeparatorComponent={Divider}
          SectionSeparatorComponent={Divider}
          renderItem={({ item, section }) => <SetListItem exerciseNumber={section.exerciseNumber} setNumber={item.setNumber} formikProps={formikProps} />}
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
        <Button mode="contained" onPress={formikProps.handleSubmit as any}>Submit</Button>
        </React.Fragment>
      )}
    </Formik>
  );
};

export interface ISetListItemProps extends CreateSetInput {
  exerciseNumber?: number;
  formikProps?: FormikProps<WorkoutInputs>;
}

const SetListItem: React.FC<ISetListItemProps> = props => {
  const { setNumber, exerciseNumber, formikProps } = props;
  const createSetInput = formikProps.values.exerciseResultInputs[exerciseNumber].createSetInputs[setNumber - 1];
  const setStringIdentifier = `exerciseResultInputs[${exerciseNumber}].createSetInputs[${setNumber - 1}]`;

  return (
    <ListItemRow>
      <Text>{setNumber}</Text>
      <TextInput
        maxLength={4}
        placeholder="0"
        style={styles.TextInputStyle}
        keyboardType={"numeric"}
        onChangeText={formikProps.handleChange(`${setStringIdentifier}.repetitions`)}
        onBlur={formikProps.handleBlur(`${setStringIdentifier}.repetitions`)}
        value={createSetInput.repetitions.toString()}
      />
      <TextInput
        maxLength={4}
        placeholder="0"
        style={styles.TextInputStyle}
        keyboardType={"numeric"}
        onChangeText={formikProps.handleChange(`${setStringIdentifier}.weightInKg`)}
        onBlur={formikProps.handleBlur(`${setStringIdentifier}.weightInKg`)}
        value={createSetInput.weightInKg.toString()}
      />
      <SimpleCheckbox />
    </ListItemRow>
  );
};

const styles = StyleSheet.create({
    TextInputStyle: {
      textAlign: "center",
      height: 40,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: "#009688",
      width: 100
    }
  });

export default WorkoutTable;
