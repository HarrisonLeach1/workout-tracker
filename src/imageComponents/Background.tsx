import React, { memo } from "react";
import { ImageBackground, StyleSheet, KeyboardAvoidingView } from "react-native";

export interface IBackgroundProps {
  children: React.ReactNode;
}

const Background: React.FC<IBackgroundProps> = ({ children }: IBackgroundProps) => (
  <ImageBackground source={require("../../assets/background_dot.png")} resizeMode="repeat" style={styles.background}>
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {children}
    </KeyboardAvoidingView>
  </ImageBackground>
);

export default memo(Background);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%"
  },
  container: {
    flex: 1,
    padding: 20,
    width: "100%",
    maxWidth: 340,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center"
  }
});
