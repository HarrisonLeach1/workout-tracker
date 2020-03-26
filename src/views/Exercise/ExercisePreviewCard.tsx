import { Exercise } from '../../types/WorkoutTypes';
import { Surface, Theme, withTheme } from 'react-native-paper';
import { Text, StyleSheet } from 'react-native';
import React from 'react';

export interface IExercisePreviewCardProps {
  theme: Theme;
  exercise: Exercise;
}

const ExercisePreviewCard: React.FC<IExercisePreviewCardProps> = (props) => {
  const { name, sets, repetitions, weightInKg } = props.exercise;
  const description: string = `Sets: ${sets}, Reps: ${repetitions}, Weight: ${weightInKg} kg`;

  return (
    <Surface style={styles.surface}>
      <Text style={{ ...styles.header, color: props.theme.colors.text }} numberOfLines={1} ellipsizeMode="tail">
        {name}
      </Text>
      <Text style={{ ...styles.description, color: 'grey' }} numberOfLines={2} ellipsizeMode="tail">
        {description}
      </Text>
    </Surface>
  );
};

export default withTheme(ExercisePreviewCard);

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
  },
  description: {
    marginTop: 6,
    fontSize: 12,
  },
  surface: {
    elevation: 4,
    margin: 12,
    padding: 12,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
