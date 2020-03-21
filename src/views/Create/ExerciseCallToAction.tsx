import { Caption, IconButton } from "react-native-paper";
import { Text, StyleSheet, View } from "react-native";
import React from "react";

const ExerciseCallToAction: React.FC<{}> = () => {
  return (
    <View style={styles.container}>
      <IconButton icon="dumbbell" size={80} disabled={true} />
      <Caption style={styles.caption}>Add an exercise to your routine</Caption>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 120,
    marginBottom: 120,
    alignItems:"center"
  },
  caption: {
      fontSize: 14
  }
});

export default ExerciseCallToAction;
