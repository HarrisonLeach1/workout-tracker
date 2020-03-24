import React from "react";
import { StyleSheet, View } from "react-native";
import { Theme, withTheme, Appbar } from "react-native-paper";
import { RouteComponentProps } from "react-router";

interface IHomeScreenProps extends RouteComponentProps {
  theme: Theme;
}

const ProfileScreen: React.FC<IHomeScreenProps> = (props: IHomeScreenProps) => {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Profile" subtitle="Workout Tracker" />
      </Appbar.Header>
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

export default withTheme(ProfileScreen);
