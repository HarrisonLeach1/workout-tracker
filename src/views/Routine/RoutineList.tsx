import React, { useContext, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { FAB, ActivityIndicator, Theme, Divider, withTheme } from 'react-native-paper';
import { ListRoutinesQueryVariables, ListRoutinesQuery } from '../../API';
import gql from 'graphql-tag';
import { listRoutines } from '../../graphql/queries';
import { useQuery } from '@apollo/react-hooks';
import { SelectedRoutineContext } from '../../contexts/SelectedRoutineContext';
import RoutinePreviewCard from './RoutinePreviewCard';
import CallToAction from '../Create/CallToAction';
import ExplanatoryDialog from '../dialogs/ExplanatoryDialog';
// TODO: Find a more sophisticated way of handling limits
const ROUTINE_LIMIT = 5;

interface IRoutineListProps extends RouteComponentProps {
  theme: Theme;
}

const RoutineList: React.FC<IRoutineListProps> = ({ history, theme }: IRoutineListProps) => {
  const { loading, data, error } = useQuery<ListRoutinesQuery, ListRoutinesQueryVariables>(gql(listRoutines));
  const { setRoutineID } = useContext(SelectedRoutineContext);

  const [limitDialogVisible, setLimitDialogVisible] = useState<boolean>(false);
  const handleLimitDialogDismiss = () => {
    setLimitDialogVisible(false);
  };

  const handleCreatePress = () => {
    if (data.listRoutines.items.length >= ROUTINE_LIMIT) {
      setLimitDialogVisible(true);
    } else {
      history.push('/CreateRoutine');
    }
  };
  return (
    <View style={styles.container}>
      <ExplanatoryDialog
        theme={theme}
        visible={limitDialogVisible}
        onDismiss={handleLimitDialogDismiss}
        title="Routine Count Exceeded"
        message="You cannot create more than 5 routines using the free version of Workout Tracker. Upgrade to create more."
      />
      {loading ? (
        <ActivityIndicator size={'large'} animating={true} color={theme.colors.primary} />
      ) : data ? (
        <React.Fragment>
          <FlatList
            renderItem={({ item }) => (
              <RoutinePreviewCard
                onPress={() => {
                  setRoutineID(item.id);
                  history.push('/Workout');
                }}
                routine={item}
                theme={theme}
              />
            )}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={Divider}
            ListEmptyComponent={
              <CallToAction
                icon="clipboard-alert-outline"
                message={'You have no routines\n Create one to start a workout'}
              />
            }
            data={data.listRoutines.items}
          />
          <FAB style={styles.fab} icon="plus" onPress={() => handleCreatePress()} />
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
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  fab: {
    position: 'absolute',
    margin: 24,
    right: 0,
    bottom: 0,
  },
});

export default withTheme(RoutineList);
