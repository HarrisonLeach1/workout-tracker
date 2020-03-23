import { SectionList, TextInput, Text, StyleSheet, View, ViewStyle, StyleProp, TextStyle } from "react-native";
import { Divider, Button, Title, Subheading, Caption, Theme, Checkbox } from "react-native-paper";
import React, { useState } from "react";
import { Formik, FormikProps } from "formik";
import { WorkoutInputs } from "../../contexts/InProgressWorkoutContext";
import { useCreateWorkout } from "../../customGraphql/HandleCreateWorkout";
import { GetRoutineQuery, CreateSetInput } from "../../API";
import { mapRoutinetoWorkoutInputs } from "../../mapping/MapRoutineToWorkoutInputs";
import { Exercise } from "../../types/WorkoutTypes";
import { RouteComponentProps } from "react-router-native";

export interface IWorkoutTableProps extends RouteComponentProps {
  theme: Theme;
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

  // This is needed to map the routine data to the format required by a SectionList component
  const exerciseData: ExerciseSection[] = routineData.getRoutine.exercises.items.map<ExerciseSection>((item: Exercise, index) => ({
    title: item.name,
    exerciseNumber: index,
    data: initialValues.exerciseResultInputs[index].createSetInputs
  }));

  return (
    <Formik initialValues={initialValues} onSubmit={values => handleCreateWorkout(values, routineData.getRoutine.exercises.items)}>
      {(formikProps: FormikProps<WorkoutInputs>) => (
        <React.Fragment>
          <Title style={{ marginHorizontal: 12, marginVertical: 12 }}>{routineData.getRoutine.name}</Title>
          <SectionList
            sections={exerciseData}
            keyExtractor={(item, index) => item + index.toString()}
            ItemSeparatorComponent={Divider}
            SectionSeparatorComponent={Divider}
            renderItem={({ item, section }) => <SetListItem exerciseNumber={section.exerciseNumber} setNumber={item.setNumber} formikProps={formikProps} />}
            renderSectionHeader={({ section: { title } }) => {
              return (
                <React.Fragment>
                  <Subheading style={{ marginHorizontal: 12, marginTop: 12 }} numberOfLines={1}>
                    {title}
                  </Subheading>
                  <View style={styles.rowStyle}>
                    <Caption>Set</Caption>
                    <Caption style={styles.repsPositionInRow}>Reps</Caption>
                    <Caption style={styles.weightPositionInRow}>Weight (Kg)</Caption>
                    <Caption style={styles.completedPositionInRow}>Completed</Caption>
                  </View>
                </React.Fragment>
              );
            }}
          />
          <Button mode="contained" onPress={formikProps.handleSubmit as any}>
            Submit
          </Button>
        </React.Fragment>
      )}
    </Formik>
  );
};

// TODO: move SetListItem into separate file
export interface ISetListItemProps extends CreateSetInput {
  exerciseNumber?: number;
  formikProps?: FormikProps<WorkoutInputs>;
}

const SetListItem: React.FC<ISetListItemProps> = props => {
  const { setNumber, exerciseNumber, formikProps } = props;
  const createSetInput = formikProps.values.exerciseResultInputs[exerciseNumber].createSetInputs[setNumber - 1];
  const setStringIdentifier = `exerciseResultInputs[${exerciseNumber}].createSetInputs[${setNumber - 1}]`;

  const [completed, setCompleted] = useState<boolean>(false);
  const backgroundColorStyle: StyleProp<ViewStyle> = completed ? { backgroundColor: "#d7f5df" } : {};

  return (
    <View style={{ ...styles.rowStyle, ...backgroundColorStyle }}>
      <Text>{setNumber}</Text>
      <TextInput
        maxLength={6}
        placeholder={createSetInput.targetRepetitions ? createSetInput.targetRepetitions.toString() : "0"}
        style={{ ...styles.TextInputStyle, ...styles.repsPositionInRow }}
        keyboardType={"numeric"}
        onChangeText={formikProps.handleChange(`${setStringIdentifier}.repetitions`)}
        onBlur={formikProps.handleBlur(`${setStringIdentifier}.repetitions`)}
        value={createSetInput.repetitions ? createSetInput.repetitions.toString() : ""}
      />
      <TextInput
        maxLength={6}
        placeholder={createSetInput.targetWeightInKg ? createSetInput.targetWeightInKg.toString() : "0"}
        style={{ ...styles.TextInputStyle, ...styles.weightPositionInRow }}
        keyboardType={"numeric"}
        onChangeText={formikProps.handleChange(`${setStringIdentifier}.weightInKg`)}
        onBlur={formikProps.handleBlur(`${setStringIdentifier}.weightInKg`)}
        value={createSetInput.weightInKg ? createSetInput.weightInKg.toString() : ""}
      />
      <View style={{ position: "absolute", right: "10%" }}>
        <Checkbox.Android
          status={completed ? "checked" : "unchecked"}
          onPress={() => {
            // set weight and reps to target values if they have not been input
            createSetInput.weightInKg = createSetInput.weightInKg || createSetInput.targetWeightInKg;
            createSetInput.repetitions = createSetInput.repetitions || createSetInput.targetRepetitions;
            setCompleted(!completed);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  TextInputStyle: {
    textAlign: "center",
    height: 25,
    borderRadius: 15,
    borderWidth: 2,
    backgroundColor: "lightgrey",
    borderColor: "lightgrey",
    width: 70
  },
  rowStyle: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center"
  },
  setHeadingText: {},
  weightPositionInRow: { position: "absolute", left: "20%" },
  repsPositionInRow: { position: "absolute", left: "50%" },
  completedPositionInRow: { position: "absolute", right: "5%" }
});

export default WorkoutTable;
