import { Portal, Theme, Dialog, Paragraph, Button, withTheme, ActivityIndicator } from "react-native-paper";
import React, { useEffect } from "react";

export interface ILoadingDialogProps {
  theme: Theme;
  loading: boolean;
  visible: boolean;
  onDismiss: () => void;
  titleOnComplete: string;
  messageOnComplete: string;
}

const LoadingDialog: React.FC<ILoadingDialogProps> = ({ visible, onDismiss, loading, titleOnComplete, messageOnComplete }) => {
  return (
    <Portal>
      <Dialog visible={visible} dismissable={false}>
        {(loading && (
          <Dialog.Content>
            <ActivityIndicator />
          </Dialog.Content>
        )) || (
          <>
            <Dialog.Title>{titleOnComplete}</Dialog.Title>
            <Dialog.Content>
              <Paragraph>{messageOnComplete}</Paragraph>
            </Dialog.Content>
            <Dialog.Actions style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
              <Button onPress={() => onDismiss()}>Okay</Button>
            </Dialog.Actions>
          </>
        )}
      </Dialog>
    </Portal>
  );
};

export default withTheme(LoadingDialog);
