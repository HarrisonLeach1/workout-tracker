import { Appbar, withTheme } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Theme } from 'react-native-paper/lib/typescript/src/types';
import ExerciseList from './ExerciseList';

export interface IExerciseScreenProps extends RouteComponentProps {
  theme: Theme;
}

const ExerciseScreen: React.FC<IExerciseScreenProps> = (props) => {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Exercises" subtitle="Workout Tracker" />
      </Appbar.Header>
      <ExerciseList {...props} />
    </View>
  );
};

export default withTheme(ExerciseScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});
