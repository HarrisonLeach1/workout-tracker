import { Caption, IconButton } from "react-native-paper";
import { Text, StyleSheet, View } from "react-native";
import React from "react";

export interface ICallToActionProps {
  icon: string;
  message: string;
}

const CallToAction: React.FC<ICallToActionProps> = ({icon, message}) => {
  return (
    <View style={styles.container}>
      <IconButton icon={icon} size={80} disabled={true} />
      <Caption style={styles.caption}>{message}</Caption>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 90,
    marginBottom: 120,
    alignItems: "center"
  },
  caption: {
    textAlign: "center",
    fontSize: 14
  }
});

export default CallToAction;
