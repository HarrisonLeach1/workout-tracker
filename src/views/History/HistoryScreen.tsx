import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Theme, withTheme, Appbar } from 'react-native-paper';
import { RouteComponentProps } from 'react-router';
import HistoryList from './HistoryList';

interface IHistoryScreenProps extends RouteComponentProps {
  theme: Theme;
}

const HistoryScreen: React.FC<IHistoryScreenProps> = (props: IHistoryScreenProps) => {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="History" subtitle="Workout Tracker" />
      </Appbar.Header>
      <HistoryList {...props} />
    </View>
  );
};

export default withTheme(HistoryScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});
