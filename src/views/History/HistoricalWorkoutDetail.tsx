import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { ActivityIndicator } from 'react-native';
import { DataTable, withTheme, Theme } from 'react-native-paper';
import React from 'react';
import { getWorkoutSets } from '../../customGraphql/customQueries';

export interface IHistoricalWorkoutDetailProps {
  theme: Theme;
  workoutId: string;
}

interface BestSetInfo {
  exerciseResultId: string;
  exercise: string;
  info: string;
}

const HistoricalWorkoutDetail: React.FC<IHistoricalWorkoutDetailProps> = ({ workoutId }) => {
  const { loading, data } = useQuery(gql(getWorkoutSets), {
    variables: {
      id: workoutId,
    },
  });

  const bestSetInfo: BestSetInfo[] = data
    ? data.getWorkout.exerciseResults.items.map((exerciseResult) => {
        // TODO: Improve best set calculation, currently does not work if weight is zero
        const bestSet = exerciseResult.sets.items.reduce((max, current) =>
          max.weightInKg * max.repetitions > current.weightInKg * current.repetitions ? max : current
        );

        return {
          exerciseResultId: exerciseResult.id,
          exercise: exerciseResult.exercise.name,
          info: `${bestSet.weightInKg} kg x ${bestSet.repetitions}`,
        };
      })
    : null;

  return (
    <>
      {(loading && <ActivityIndicator style={{ marginTop: 8, padding: 32 }} />) ||
        (data && (
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Exercise</DataTable.Title>
              <DataTable.Title numeric={true}>Best Set (Volume)</DataTable.Title>
            </DataTable.Header>
            {bestSetInfo.map(({ exerciseResultId, exercise, info }) => (
              <DataTable.Row key={exerciseResultId}>
                <DataTable.Cell>{exercise}</DataTable.Cell>
                <DataTable.Cell numeric={true}>{info}</DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable>
        ))}
    </>
  );
};

export default withTheme(HistoricalWorkoutDetail);
