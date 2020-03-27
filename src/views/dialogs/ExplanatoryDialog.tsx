import { Portal, Theme, Dialog, Paragraph, Button, withTheme } from 'react-native-paper';
import React from 'react';

export interface IExplanatoryDialogProps {
  theme: Theme;
  visible: boolean;
  onDismiss: () => void;
  title: string;
  message: string;
}

const ExplanatoryDialog: React.FC<IExplanatoryDialogProps> = ({ visible, onDismiss, title, message }) => {
  return (
    <Portal>
      <Dialog visible={visible} dismissable={false}>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Content>
          <Paragraph>{message}</Paragraph>
        </Dialog.Content>
        <Dialog.Actions style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <Button onPress={() => onDismiss()}>Okay</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default withTheme(ExplanatoryDialog);
