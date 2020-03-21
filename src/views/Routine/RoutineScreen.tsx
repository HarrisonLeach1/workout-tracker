import React from "react";
import { StyleSheet, View } from "react-native";
import { Theme, withTheme, Appbar } from "react-native-paper";
import RoutineList from "./RoutineList";
import { RouteComponentProps } from "react-router";

interface IHomeScreenProps extends RouteComponentProps {
  theme: Theme;
}

const RoutineScreen = (props: IHomeScreenProps) => {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Routines" subtitle="Workout Tracker"/>
      </Appbar.Header>
      <RoutineList {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "flex-start"
  }
});

export default withTheme(RoutineScreen);
