import React, { useState } from 'react';
import { Appbar, withTheme, Theme } from 'react-native-paper';
import { RouteComponentProps } from 'react-router';
import { FormikProps } from 'formik';
import { RoutineFormValues } from './CreateRoutineScreen';
import ConfirmQuitDialog from '../dialogs/ConfirmQuitDialog';

interface ICreateRoutineHeaderProps extends RouteComponentProps {
  theme: Theme;
  formikProps: FormikProps<RoutineFormValues>;
}

const CreateRoutineHeader: React.FC<ICreateRoutineHeaderProps> = ({
  theme,
  history,
  formikProps,
}: ICreateRoutineHeaderProps) => {
  const [quitDialogVisible, setQuitDialogVisible] = useState<boolean>(false);
  const handleConfirmQuit = () => {
    setQuitDialogVisible(false);
    history.goBack();
  };
  const handleCancelQuit = () => setQuitDialogVisible(false);

  return (
    <>
      <Appbar.Header>
        <Appbar.Action icon="close" size={28} onPress={() => setQuitDialogVisible(true)} />
        <Appbar.Content title="Create Workout Routine" />
        <Appbar.Action icon="check" onPress={() => formikProps.submitForm()} />
      </Appbar.Header>
      <ConfirmQuitDialog
        theme={theme}
        visible={quitDialogVisible}
        onConfirmQuit={handleConfirmQuit}
        onCancelQuit={handleCancelQuit}
        title="Quit Routine Creation"
        description={'Are you sure you want to quit routine creation? \nYour progress will not be saved.'}
      />
    </>
  );
};

export default withTheme(CreateRoutineHeader);
