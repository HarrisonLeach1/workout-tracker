import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React, { useContext, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ActivityIndicator, Divider, FAB, Theme, withTheme } from 'react-native-paper';
import { RouteComponentProps } from 'react-router';
import { ListRoutinesQuery, ListRoutinesQueryVariables } from '../../API';
import { SelectedRoutineContext } from '../../contexts/SelectedRoutineContext';
import { listRoutines } from '../../graphql/queries';
import CallToAction from '../Create/CallToAction';
import ExplanatoryDialog from '../dialogs/ExplanatoryDialog';
import RoutinePreviewCard from './RoutinePreviewCard';
// TODO: Find a more sophisticated way of handling limits
const ROUTINE_LIMIT = 8;

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
        message={`You cannot create more than ${ROUTINE_LIMIT} routines using the free version of Workout Tracker. Upgrade to create more.`}
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
