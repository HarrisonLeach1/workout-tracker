import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Theme, withTheme, Appbar } from 'react-native-paper';
import RoutineList from './RoutineList';
import { RouteComponentProps } from 'react-router';
import InProgressBanner from '../dialogs/InProgressBanner';

interface IHomeScreenProps extends RouteComponentProps {
  theme: Theme;
}

const RoutineScreen = (props: IHomeScreenProps) => {
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="Routines" subtitle="Workout Tracker" />
      </Appbar.Header>
      <InProgressBanner />
      <RoutineList {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    elevation: 4,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});

export default withTheme(RoutineScreen);
