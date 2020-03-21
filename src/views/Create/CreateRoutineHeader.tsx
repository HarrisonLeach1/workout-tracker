import React from "react";
import { Appbar, Surface, Title, FAB, withTheme, Theme } from "react-native-paper";
import { RouteComponentProps } from "react-router";
import { StyleProp, ViewStyle, StyleSheet, TextInput, View } from "react-native";
import { FormikProps } from "formik";
import { RoutineFormValues } from "./CreateRoutineScreen";

interface ICreateRoutineHeaderProps extends RouteComponentProps {
  theme: Theme;
  formikProps: FormikProps<RoutineFormValues>;
}

const CreateRoutineHeader: React.FC<ICreateRoutineHeaderProps> = ({ history, theme, formikProps }: ICreateRoutineHeaderProps) => {
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => history.goBack()} />
      <Appbar.Content title="Create Workout Routine" />
      <Appbar.Action icon="check" onPress={() => formikProps.submitForm()} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  surface: {
    alignItems: "stretch",
    justifyContent: "flex-start",
    elevation: 4
  },
  textContainer: {
    alignItems: "stretch",
    justifyContent: "space-between"
  },
  fab: {
    position: "absolute",
    margin: 24,
    right: 0,
    bottom: 0
  }
});

export default withTheme(CreateRoutineHeader);
