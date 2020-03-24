import { Portal, Dialog, Paragraph, Button, withTheme, Theme } from "react-native-paper";
import React from "react";

export interface IQuitWorkoutDialogProps {
  theme: Theme;
  visible: boolean;
  onQuitWorkout: () => void;
  onCancelQuitWorkout: () => void;
}

const QuitWorkoutDialog: React.FC<IQuitWorkoutDialogProps> = ({ visible, onQuitWorkout, onCancelQuitWorkout }) => {
  return (
    <Portal>
      <Dialog visible={visible} dismissable={false}>
        <Dialog.Title>Quit Workout</Dialog.Title>
        <Dialog.Content>
          <Paragraph>{"Are you sure you want to quit the current workout? \nYour progress will not be saved."}</Paragraph>
        </Dialog.Content>
        <Dialog.Actions style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <Button onPress={() => onCancelQuitWorkout()}>No</Button>
          <Button onPress={() => onQuitWorkout()}>Yes</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default withTheme(QuitWorkoutDialog);
