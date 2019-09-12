import React, { useContext } from "react";
import {
    StyleSheet,
    KeyboardAvoidingView,
    ScrollView,
    View
} from "react-native";
import { TextInput, Button, Appbar, withTheme } from "react-native-paper";
import { Formik, FormikProps, FormikActions } from "formik";
import { CreateExerciseInput } from "../../API";
import { WorkoutInputs } from "../../modules/WorkoutTypes";
import { useNavigation } from "../../modules/NavigationTypes";

interface ExerciseFormValues {
    name: string;
    sets: string;
    repetitions: string;
    weightInKg: string;
}

interface NavigationParams {
    workout: WorkoutInputs;
}

const CreateExerciseScreen = ({ theme }) => {
    const navigation = useNavigation<NavigationParams>();
    const handleSubmit = (values: ExerciseFormValues) => {
        const exercise: CreateExerciseInput = {
            name: values.name,
            sets: +values.sets,
            repetitions: +values.repetitions,
            weightInKg: +values.weightInKg
        };

        const workout: WorkoutInputs = navigation.state.params.workout;
        workout.createExercisesInput.push(exercise);

        navigation.goBack();
    };

    return (
        <React.Fragment>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Create Exercise" />
            </Appbar.Header>

            <KeyboardAvoidingView
                style={styles.wrapper}
                behavior="padding"
                keyboardVerticalOffset={0}
            >
                <ScrollView
                    style={styles.container}
                    keyboardShouldPersistTaps={"always"}
                    removeClippedSubviews={false}
                >
                    <Formik
                        initialValues={{
                            name: "",
                            sets: "3",
                            repetitions: "8",
                            weightInKg: "20"
                        }}
                        onSubmit={handleSubmit}
                    >
                        {(props: FormikProps<ExerciseFormValues>) => (
                            <View>
                                <TextInput
                                    style={styles.inputContainerStyle}
                                    label="Exercise Name"
                                    placeholder="Type something"
                                    onChangeText={props.handleChange("name")}
                                    onBlur={props.handleBlur("name")}
                                    value={props.values.name}
                                />

                                <TextInput
                                    style={styles.inputContainerStyle}
                                    label="Number of Sets"
                                    placeholder="Type something"
                                    onChangeText={props.handleChange("sets")}
                                    onBlur={props.handleBlur("sets")}
                                    value={props.values.sets}
                                />

                                <TextInput
                                    style={styles.inputContainerStyle}
                                    label="Goal Repetitions"
                                    placeholder="Type something"
                                    onChangeText={props.handleChange(
                                        "repetitions"
                                    )}
                                    onBlur={props.handleBlur("repetitions")}
                                    value={props.values.repetitions}
                                />

                                <TextInput
                                    style={styles.inputContainerStyle}
                                    label="Goal Weight (Kg)"
                                    placeholder="Type something"
                                    onChangeText={props.handleChange(
                                        "weightInKg"
                                    )}
                                    onBlur={props.handleBlur("weightInKg")}
                                    value={props.values.weightInKg}
                                />
                                <Button
                                    mode="contained"
                                    /*TODO: Cast is needed here due to existing bug with Formik Types with React Native: 
                                https://github.com/jaredpalmer/formik/issues/376 */
                                    onPress={props.handleSubmit as any}
                                >
                                    Submit
                                </Button>
                            </View>
                        )}
                    </Formik>
                </ScrollView>
            </KeyboardAvoidingView>
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        backgroundColor: "#fff"
    },
    wrapper: {
        flex: 1,
        marginTop: 16
    },
    inputContainerStyle: {
        margin: 8
    }
});

export default CreateExerciseScreen;
