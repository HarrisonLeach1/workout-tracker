import { Routine } from "../../types/WorkoutTypes";
import { Surface, Theme, Title, Paragraph, Headline } from "react-native-paper";
import { StyleSheet, Text } from "react-native";
import React from "react";

export interface IRoutinePreviewCardProps {
  theme: Theme;
  onPress: () => void;
  routine: Routine;
}

const RoutinePreviewCard: React.FC<IRoutinePreviewCardProps> = ({ theme, onPress, routine }) => {
  const description : string = routine.exercises.items.map((item) => ` ${item.name}`).toString();
  
    return (
    <Surface style={styles.surface}>
      <Text style={{ ...styles.header, color: theme.colors.text}} numberOfLines={1} ellipsizeMode="tail">
        {routine.name}
      </Text>
      <Text style={{ ...styles.description, color: theme.colors.text }} numberOfLines={3} ellipsizeMode="tail">
        {description}
      </Text>
    </Surface>
  );
};

export default RoutinePreviewCard;

const styles = StyleSheet.create({
  header: {
    fontSize: 18
  },
  description: {
    fontSize: 12
  },
  surface: {
    padding: 8,
    margin: 12,
    alignItems: "flex-start",
    justifyContent: "center",
    elevation: 4
  }
});
