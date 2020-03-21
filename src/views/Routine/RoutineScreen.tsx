import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Theme, withTheme } from "react-native-paper";
import RoutineList from "./RoutineList";
import { RouteComponentProps } from "react-router";

interface IHomeScreenProps extends RouteComponentProps {
  theme: Theme;
}

const RoutineScreen = (props: IHomeScreenProps) => {
  return (
    <View style={styles.container}>
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
    justifyContent: "center"
  }
});

export default withTheme(RoutineScreen);
