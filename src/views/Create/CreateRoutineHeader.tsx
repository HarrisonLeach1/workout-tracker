import React from "react";
import { Appbar, withTheme, Theme } from "react-native-paper";
import { RouteComponentProps } from "react-router";
import { FormikProps } from "formik";
import { RoutineFormValues } from "./CreateRoutineScreen";

interface ICreateRoutineHeaderProps extends RouteComponentProps {
  theme: Theme;
  formikProps: FormikProps<RoutineFormValues>;
}

const CreateRoutineHeader: React.FC<ICreateRoutineHeaderProps> = ({ history, formikProps }: ICreateRoutineHeaderProps) => {
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => history.goBack()} />
      <Appbar.Content title="Create Workout Routine" />
      <Appbar.Action icon="check" onPress={() => formikProps.submitForm()} />
    </Appbar.Header>
  );
};


export default withTheme(CreateRoutineHeader);
