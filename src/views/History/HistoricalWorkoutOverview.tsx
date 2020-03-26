import { Workout } from '../../types/WorkoutTypes';
import { Text, StyleSheet, View } from 'react-native';
import { IconButton, withTheme, Theme } from 'react-native-paper';
import React from 'react';
import moment from 'moment';

export interface IHistoricalWorkoutOverviewProps {
  theme: Theme;
  workout: Workout;
}

const HistoricalWorkoutOverview: React.FC<IHistoricalWorkoutOverviewProps> = ({
  workout: {
    startedAt,
    completedAt,
    exerciseResults: { items },
  },
}) => {
  const startedMoment = moment(startedAt);
  const completedMoment = moment(completedAt);

  const formattedStartedTime = startedMoment.format('dddd, D MMM h:m A');
  const duration = moment
    .utc(moment.duration(completedMoment.diff(startedMoment)).asSeconds() * 1000)
    .format('H [h] m [m]');

  // TODO: Don't use inline styles
  return (
    <View style={{ flexDirection: 'column' }}>
      <Text style={{ color: 'grey', paddingLeft: 12 }}>{formattedStartedTime.toString()}</Text>
      <View style={styles.iconAndText}>
        <IconButton icon="clock" disabled={true} />
        <Text style={{ color: 'grey', paddingRight: 32 }}>{duration}</Text>
        <IconButton icon="dumbbell" disabled={true} />
        <Text style={{ color: 'grey' }}>{items.length} exercises</Text>
      </View>
    </View>
  );
};

export default withTheme(HistoricalWorkoutOverview);

const styles = StyleSheet.create({
  iconAndText: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingRight: 32,
  },
});
