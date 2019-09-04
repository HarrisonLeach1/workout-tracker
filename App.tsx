import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import WorkoutScreen from './WorkoutScreen';

let dummyData: Workout = {
  exercises: [{
    title: "Barbell Rows",
    sets: 5,
    repetitions: 6,
    weightInKg: 60
  }]
}

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <WorkoutScreen workout={dummyData} />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};
