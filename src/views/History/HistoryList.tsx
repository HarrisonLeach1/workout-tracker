import { Theme, withTheme, ActivityIndicator } from "react-native-paper";
import { useQuery } from "@apollo/react-hooks";
import { ListWorkoutsQuery, ListWorkoutsQueryVariables } from "../../API";
import gql from "graphql-tag";
import { listWorkouts } from "../../graphql/queries";
import { FlatList } from "react-native";
import HistoricalWorkoutAccordion from "./HistoricalWorkoutAccordion";
import React from "react";

export interface IHistoryListProps {
  theme: Theme;
}

const HistoryList: React.FC<IHistoryListProps> = ({ theme }) => {
  const { data, loading, error } = useQuery<ListWorkoutsQuery, ListWorkoutsQueryVariables>(gql(listWorkouts), {
    variables: {
      limit: 10
    }
  });

  return (
    <>
      {(loading && <ActivityIndicator style={{ marginTop: 32 }} />) ||
        (data && (
          <FlatList
            renderItem={({ item }) => <HistoricalWorkoutAccordion theme={theme} workout={item} />}
            keyExtractor={item => item.id}
            data={data.listWorkouts.items}
          />
        ))}
    </>
  );
};

export default withTheme(HistoryList);