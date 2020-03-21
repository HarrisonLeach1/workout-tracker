import { Routine } from "../../types/WorkoutTypes";
import { Surface, Theme, Title, Paragraph, Headline, Divider, IconButton } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import React from "react";

export interface IRoutinePreviewCardProps {
  theme: Theme;
  onPress: () => void;
  routine: Routine;
}

const RoutinePreviewCard: React.FC<IRoutinePreviewCardProps> = ({ theme, onPress, routine }) => {
  const description: string = routine.exercises.items.map(item => ` ${item.name} ${item.sets} x ${item.repetitions} x ${item.weightInKg} kg`).join(",\n");

  return (
    <Surface style={styles.surface}>
      <View style={styles.textContainer}>
        <Text style={{ ...styles.header, color: theme.colors.text }} numberOfLines={1} ellipsizeMode="tail">
          {routine.name}
        </Text>
        <Text style={{ ...styles.description, color: "grey" }} numberOfLines={3} ellipsizeMode="tail">
          {description}
        </Text>
      </View>
      <View style={styles.start}>
        <IconButton icon="play" animated={true} size={40} color={theme.colors.primary} onPress={onPress} />
      </View>
    </Surface>
  );
};

export default RoutinePreviewCard;

const styles = StyleSheet.create({
  header: {
    fontSize: 18
  },
  description: {
    marginTop: 6,
    fontSize: 12
  },
  textContainer: {
    alignItems: "flex-start",
    justifyContent: "center"
  },
  start: {
    alignSelf: "center"
  },
  surface: {
    padding: 12,
    margin: 12,
    elevation: 4,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
