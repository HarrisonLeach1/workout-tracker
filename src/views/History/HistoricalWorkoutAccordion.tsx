import { Theme } from "react-native-paper/lib/typescript/src/types";
import { Workout } from "../../types/WorkoutTypes";
import { withTheme, Surface, Text, IconButton } from "react-native-paper";
import React, { useState } from "react";
import { StyleSheet, View, TouchableHighlight } from "react-native";
import HistoricalWorkoutDetail from "./HistoricalWorkoutDetail";
import HistoricalWorkoutOverview from "./HistoricalWorkoutOverview";

export interface IHistoricalWorkoutCardProps {
  theme: Theme;
  workout: Workout;
}

const HistoricalWorkoutAccordion: React.FC<IHistoricalWorkoutCardProps> = ({ theme, workout }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handlePress = () => {
    setExpanded(!expanded);
  };

  return (
    <Surface style={styles.surface}>
      <TouchableHighlight onPress={handlePress} underlayColor={"lightgrey"}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={{ ...styles.header, color: theme.colors.text }}>{workout.routine.name}</Text>
            <HistoricalWorkoutOverview workout={workout} theme={theme} />
          </View>
          <IconButton icon={expanded ? "menu-up" : "menu-down"} size={32} style={{ width: 64, alignSelf: "center" }} />
        </View>
      </TouchableHighlight>
      {expanded && <HistoricalWorkoutDetail workoutId={workout.id} />}
    </Surface>
  );
};

export default withTheme(HistoricalWorkoutAccordion);

const styles = StyleSheet.create({
  surface: {
    elevation: 4,
    margin: 12
  },
  header: {
    fontSize: 18,
    padding: 12
  }
});
