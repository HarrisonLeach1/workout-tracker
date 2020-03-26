import { Searchbar, Theme, Divider, ActivityIndicator, withTheme } from 'react-native-paper';
import React, { useState } from 'react';
import { StyleSheet, FlatList, ScrollView } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import { ListExercisesQuery, ListExercisesQueryVariables } from '../../API';
import { listExercises } from '../../graphql/queries';
import gql from 'graphql-tag';
import ExercisePreviewCard from './ExercisePreviewCard';
import CallToAction from '../Create/CallToAction';

export interface IExerciseListProps {
  theme: Theme;
}

const ExerciseList: React.FC<IExerciseListProps> = ({ theme }) => {
  const [query, setQuery] = useState('');
  const filter = query
    ? {
        filter: {
          name: {
            beginsWith: query,
          },
        },
      }
    : {};

  const { data, loading, error } = useQuery<ListExercisesQuery, ListExercisesQueryVariables>(gql(listExercises), {
    variables: filter,
  });

  return (
    <React.Fragment>
      <Searchbar
        style={styles.searchbar}
        placeholder="Search"
        onChangeText={(input) => setQuery(input)}
        value={query}
      />
      <Divider style={styles.divider} />
      <ScrollView alwaysBounceVertical={true}>
        {(loading && <ActivityIndicator style={{ marginTop: 32 }} />) ||
          (data && (
            <FlatList
              renderItem={({ item }) => <ExercisePreviewCard theme={theme} exercise={item} />}
              keyExtractor={(item) => item.id}
              data={data.listExercises.items}
              ListEmptyComponent={
                <CallToAction
                  icon="dumbbell"
                  message={'You have no exercises\n You can add some by creating a routine'}
                />
              }
            />
          ))}
      </ScrollView>
    </React.Fragment>
  );
};

export default withTheme(ExerciseList);

const styles = StyleSheet.create({
  searchbar: {
    margin: 12,
  },
  divider: {
    marginTop: 6,
  },
});
