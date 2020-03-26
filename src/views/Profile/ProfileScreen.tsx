import React, { useState } from "react";
import { StyleSheet, View, SectionList } from "react-native";
import { Theme, withTheme, Appbar, Button, Divider, Text, Switch, Subheading, Caption } from "react-native-paper";
import { RouteComponentProps } from "react-router";
import { Auth } from "aws-amplify";

interface IHomeScreenProps extends RouteComponentProps {
  theme: Theme;
}

const ProfileScreen: React.FC<IHomeScreenProps> = ({ theme }: IHomeScreenProps) => {
  const [enableWorkoutAnalytics, setEnableWorkoutAnalytics] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Profile" subtitle="Workout Tracker" />
      </Appbar.Header>
      {/* TODO: Add real settings */}
      <View style={styles.settingRow}>
        <View style={styles.settingPair}>
          <Subheading>Share Workout Analytics</Subheading>
          <Switch value={enableWorkoutAnalytics} onValueChange={() => setEnableWorkoutAnalytics(!enableWorkoutAnalytics)} />
        </View>
        <Caption>Help improve the Workout Tracker application by allowing your workout data to be used for data analysis.</Caption>
      </View>
      <Divider />
      <View style={styles.settingRow}>
        <View style={styles.settingPair}>
          <Subheading> Log out of Workout Tracker</Subheading>
          <Button style={styles.button} mode="outlined" onPress={() => Auth.signOut()}>
            Log Out 
          </Button>
        </View>
      </View>
      <Divider />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    justifyContent: "flex-start"
  },
  button: {
    width: 110
  },
  settingRow: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: "100%",
    flexDirection: "column"
  },
  settingPair: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default withTheme(ProfileScreen);
