import { Portal, Dialog, Paragraph, Button, withTheme, Theme } from 'react-native-paper';
import React from 'react';

export interface IConfirmQuitDialogProps {
  theme: Theme;
  visible: boolean;
  onConfirmQuit: () => void;
  onCancelQuit: () => void;
  title: string;
  description: string;
}

const ConfirmQuitDialog: React.FC<IConfirmQuitDialogProps> = ({
  visible,
  onConfirmQuit,
  onCancelQuit,
  title,
  description,
}) => {
  return (
    <Portal>
      <Dialog visible={visible} dismissable={false}>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Content>
          <Paragraph>{description}</Paragraph>
        </Dialog.Content>
        <Dialog.Actions style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <Button onPress={() => onCancelQuit()}>No</Button>
          <Button onPress={() => onConfirmQuit()}>Yes</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default withTheme(ConfirmQuitDialog);
