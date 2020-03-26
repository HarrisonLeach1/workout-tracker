import React, { useContext, useState } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { List, Divider, Theme, withTheme, FAB, TextInput, Title, Caption } from 'react-native-paper';
import { useMutation } from '@apollo/react-hooks';
import { createRoutine, createExercise } from '../../graphql/mutations';
import {
  CreateRoutineMutation,
  CreateRoutineMutationVariables,
  CreateExerciseMutation,
  CreateExerciseMutationVariables,
} from '../../API';
import gql from 'graphql-tag';
import { Formik, FormikProps } from 'formik';
import { ExecutionResult } from 'apollo-link';
import { RouteComponentProps } from 'react-router';
import CreateRoutineHeader from './CreateRoutineHeader';
import { CreateRoutineContextProps, CreateRoutineContext } from '../../contexts/RoutineContext';
import CallToAction from './CallToAction';
import { listRoutines, listExercises } from '../../graphql/queries';
import LoadingDialog from '../dialogs/LoadingDialog';

interface ICreateRoutineScreenProps extends RouteComponentProps {
  theme: Theme;
}

export interface RoutineFormValues {
  name: string;
}

const CreateRoutineScreen: React.FC<ICreateRoutineScreenProps> = (props: ICreateRoutineScreenProps) => {
  const { routine, setRoutine } = useContext<CreateRoutineContextProps>(CreateRoutineContext);

  const [addRoutine, { loading: loadingCreateRoutine, data }] = useMutation<
    CreateRoutineMutation,
    CreateRoutineMutationVariables
  >(gql(createRoutine), {
    variables: {
      input: {
        name: routine.createRoutineInput.name,
      },
    },
    refetchQueries: [{ query: gql(listRoutines) }],
  });

  const [addExercise, { loading: loadingCreateExercise }] = useMutation<
    CreateExerciseMutation,
    CreateExerciseMutationVariables
  >(gql(createExercise));

  const [loadingDialogVisible, setLoadingDialogVisible] = useState<boolean>(false);
  const handleLoadingDismiss = () => {
    setLoadingDialogVisible(false);
    props.history.goBack();
  };

  // TODO: Refactor creating routines to be in custom hook
  // There is currently a limitation in amplify that arrays cannot be added as mutation inputs
  // thus each exercise must be added one by one.
  const addExercises = (newRoutineMutation: ExecutionResult<CreateRoutineMutation>) => {
    const routineId = newRoutineMutation.data.createRoutine.id;
    routine.createExercisesInput.forEach((createExerciseInput) => {
      addExercise({
        variables: {
          input: {
            ...createExerciseInput,
            exerciseRoutineId: routineId,
          },
        },
        // TODO: Very inefficient doubles the number of requests, which is already high. Must fix once the amplify issue is addressed
        refetchQueries: [{ query: gql(listExercises) }],
      });
    });
  };

  const handleCreate = async (values: RoutineFormValues) => {
    setRoutine((prev) => {
      prev.createRoutineInput.name = values.name;
      return prev;
    });

    setLoadingDialogVisible(true);

    const newRoutineMutation = await addRoutine();

    addExercises(newRoutineMutation);
  };

  return (
    <>
      <LoadingDialog
        theme={props.theme}
        loading={loadingCreateRoutine || loadingCreateExercise}
        visible={loadingDialogVisible}
        onDismiss={handleLoadingDismiss}
        titleOnComplete="Routine created"
        messageOnComplete={`Successfully created the routine: ${routine.createRoutineInput.name}`}
      />
      <Formik
        initialValues={{
          name: '',
        }}
        onSubmit={(values) => handleCreate(values)}
      >
        {(formikProps: FormikProps<RoutineFormValues>) => (
          <View style={styles.screen}>
            <CreateRoutineHeader {...props} formikProps={formikProps} />
            <TextInput
              enablesReturnKeyAutomatically={true}
              placeholder="Enter Routine Name"
              onChangeText={formikProps.handleChange('name')}
              onBlur={formikProps.handleBlur('name')}
              value={formikProps.values.name}
              style={styles.textInput}
            />
            <Title style={{ margin: 24 }}>Exercises</Title>
            <Divider style={{ marginTop: 12 }} />
            <View>
              <FlatList
                renderItem={({ item }) => <List.Item title={item.name} />}
                keyExtractor={(item, index) => item.name + index}
                ItemSeparatorComponent={Divider}
                data={routine.createExercisesInput}
                ListEmptyComponent={<CallToAction icon="dumbbell" message="Add an exercise to your routine" />}
              />
            </View>

            <FAB
              style={styles.fab}
              icon="plus"
              onPress={() => {
                props.history.push('/CreateExercise');
              }}
            />
          </View>
        )}
      </Formik>
    </>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    margin: 24,
    right: 0,
    bottom: 0,
  },
  textInput: {
    margin: 24,
  },
});

export default withTheme(CreateRoutineScreen);
