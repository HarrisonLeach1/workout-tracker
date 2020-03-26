import React, { useContext } from "react";
import { StyleSheet, KeyboardAvoidingView, ScrollView, View } from "react-native";
import { TextInput, Button, Appbar, withTheme, Theme, HelperText } from "react-native-paper";
import { Formik, FormikProps, FormikActions, ErrorMessage } from "formik";
import { CreateRoutineContext, CreateRoutineContextProps } from "../../contexts/RoutineContext";
import { CreateExerciseInput } from "../../API";
import { RouteComponentProps } from "react-router";
import * as Yup from "yup";

interface ICreateExerciseScreenProps extends RouteComponentProps {
  theme: Theme;
}

interface ExerciseFormValues {
  name: string;
  sets: string;
  repetitions: string;
  weightInKg: string;
}

const CreateExerciseScreen: React.FC<ICreateExerciseScreenProps> = ({ history, theme }: ICreateExerciseScreenProps) => {
  const { routine, setRoutine } = useContext<CreateRoutineContextProps>(CreateRoutineContext);

  const numberValidationSchema = Yup.number()
    .typeError("Must be a number")
    .required("Required")
    .positive("Must be positive")
    .test("len", "Max length exceeded", val => val && val.toString().length <= 6);

  const validationSchema = Yup.object({
    name: Yup.string().required("Exercise name is required"),
    sets: numberValidationSchema,
    repetitions: numberValidationSchema,
    weightInKg: numberValidationSchema
  });

  const handleSubmit = (values: ExerciseFormValues, actions: FormikActions<ExerciseFormValues>) => {
    const exercise: CreateExerciseInput = {
      name: values.name,
      sets: +values.sets,
      repetitions: +values.repetitions,
      weightInKg: +values.weightInKg,
      exerciseRoutineId: null
    };

    setRoutine(prev => {
      prev.createExercisesInput.push(exercise);
      return prev;
    });

    history.goBack();
  };

  return (
    <View style={styles.screen}>
      <Appbar.Header>
        <Appbar.Action icon="delete" onPress={() => history.goBack()} />
        <Appbar.Content title="Create Exercise" />
      </Appbar.Header>

      <KeyboardAvoidingView style={styles.wrapper} behavior="padding" keyboardVerticalOffset={0}>
        <ScrollView style={styles.container} keyboardShouldPersistTaps={"always"} removeClippedSubviews={false}>
          <Formik
            initialValues={{
              name: "",
              sets: "",
              repetitions: "",
              weightInKg: ""
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({ handleChange, handleBlur, errors, touched, values, handleSubmit }: FormikProps<ExerciseFormValues>) => (
              <View>
                <TextInput
                  style={styles.inputContainerStyle}
                  label="Exercise Name"
                  placeholder=""
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.name}
                  error={errors.name && touched.name}
                />
                <HelperText type="error" visible={errors.name && touched.name}>
                  {touched.name && errors.name}
                </HelperText>
                <TextInput
                  style={styles.inputContainerStyle}
                  label="Number of Sets"
                  placeholder=""
                  onChangeText={handleChange("sets")}
                  onBlur={handleBlur("sets")}
                  value={values.sets}
                  error={errors.sets && touched.sets}
                />
                <HelperText type="error" visible={touched.sets && errors.sets}>
                  {touched.sets && errors.sets}
                </HelperText>
                <TextInput
                  style={styles.inputContainerStyle}
                  label="Goal Weight (Kg)"
                  placeholder=""
                  onChangeText={handleChange("weightInKg")}
                  onBlur={handleBlur("weightInKg")}
                  value={values.weightInKg}
                  error={errors.weightInKg && touched.weightInKg}
                />
                <HelperText type="error" visible={errors.weightInKg && touched.weightInKg}>
                  {touched.weightInKg && errors.weightInKg}
                </HelperText>
                <TextInput
                  style={styles.inputContainerStyle}
                  label="Goal Repetitions"
                  placeholder=""
                  onChangeText={handleChange("repetitions")}
                  onBlur={handleBlur("repetitions")}
                  value={values.repetitions}
                  error={errors.repetitions && touched.repetitions}
                />
                <HelperText type="error" visible={errors.repetitions && touched.repetitions}>
                  {touched.repetitions && errors.repetitions}
                </HelperText>
                <Button
                  style={{ marginHorizontal: 25, marginTop: 15, marginBottom: 20 }}
                  mode="contained"
                  /*TODO: Cast is needed here due to existing bug with Formik Types with React Native: 
                                https://github.com/jaredpalmer/formik/issues/376 */
                  onPress={handleSubmit as any}
                >
                  Create Exercise
                </Button>
              </View>
            )}
          </Formik>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default withTheme(CreateExerciseScreen);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  container: {
    flex: 1,
    padding: 8
  },
  wrapper: {
    flex: 1,
    marginTop: 16
  },
  inputContainerStyle: {
    margin: 8
  }
});
