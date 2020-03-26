import { Theme, Appbar, withTheme, ActivityIndicator, Portal, Dialog, Paragraph, Button } from 'react-native-paper';
import { RouteComponentProps } from 'react-router';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import React, { useContext, useState } from 'react';
import { GetRoutineQuery, GetRoutineQueryVariables } from '../../API';
import gql from 'graphql-tag';
import { SelectedRoutineContext } from '../../contexts/SelectedRoutineContext';
import { useQuery } from '@apollo/react-hooks';
import { getRoutineAndExercises } from '../../customGraphql/customQueries';
import WorkoutTable from './WorkoutTable';
import ConfirmQuitDialog from '../dialogs/ConfirmQuitDialog';

interface IWorkoutTableProps extends RouteComponentProps {
  theme: Theme;
}

const WorkoutScreen: React.FC<IWorkoutTableProps> = (props: IWorkoutTableProps) => {
  const { routineID } = useContext(SelectedRoutineContext);

  const { loading, data } = useQuery<GetRoutineQuery, GetRoutineQueryVariables>(gql(getRoutineAndExercises), {
    variables: {
      id: routineID,
    },
  });

  const [quitDialogVisible, setQuitDialogVisible] = useState<boolean>(false);
  const handleQuitWorkout = () => {
    setQuitDialogVisible(false);
    props.history.goBack();
  };
  const handleCancelQuitWorkout = () => setQuitDialogVisible(false);

  return (
    <View style={styles.screen}>
      <ConfirmQuitDialog
        theme={props.theme}
        visible={quitDialogVisible}
        onConfirmQuit={handleQuitWorkout}
        onCancelQuit={handleCancelQuitWorkout}
        title="Quit Workout"
        description={'Are you sure you want to quit the current workout? \nYour progress will not be saved.'}
      />
      <Appbar.Header>
        <Appbar.Action icon="close" size={28} onPress={() => setQuitDialogVisible(true)} />
        <Appbar.Content title="Workout" subtitle={data ? data.getRoutine.name : ''} />
      </Appbar.Header>
      <ScrollView style={styles.container} keyboardShouldPersistTaps={'always'} removeClippedSubviews={false}>
        {loading ? (
          <ActivityIndicator
            size={'large'}
            animating={true}
            color={props.theme.colors.primary}
            style={{ marginTop: 48 }}
          />
        ) : data ? (
          <WorkoutTable routineData={data} {...props} />
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  screen: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: '#fff',
  },
  numberInput: {
    flex: 1,
    justifyContent: 'center',
  },
  TextInputStyle: {
    textAlign: 'center',
    height: 40,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#009688',
    marginBottom: 10,
  },
});
