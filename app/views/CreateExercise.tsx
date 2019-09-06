import React, { useCallback, useContext } from "react";
import {
    StyleSheet,
    KeyboardAvoidingView,
    ScrollView,
    View
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import { Formik, FormikProps, FormikActions } from "formik";
import { WorkoutContext, WorkoutContextProps } from "../modules/WorkoutContext";

interface ExerciseFormValues {
    title: string;
    sets: string;
    repetitions: string;
    weightInKg: string;
}

const CreateExercise = ({ history }) => {
    const { workout, setWorkout } = useContext<WorkoutContextProps>(
        WorkoutContext
    );

    const handleSubmit = (
        values: ExerciseFormValues,
        actions: FormikActions<ExerciseFormValues>
    ) => {
        const exercise: Exercise = {
            title: values.title,
            sets: +values.sets,
            repetitions: +values.repetitions,
            weightInKg: +values.weightInKg
        };

        setWorkout(prev => {
            prev.exercises.push(exercise);
            return prev;
        });

        history.push("/CreateWorkout");
    };

    return (
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
                        title: "",
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
                                onChangeText={props.handleChange("title")}
                                onBlur={props.handleBlur("title")}
                                value={props.values.title}
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
                                onChangeText={props.handleChange("repetitions")}
                                onBlur={props.handleBlur("repetitions")}
                                value={props.values.repetitions}
                            />

                            <TextInput
                                style={styles.inputContainerStyle}
                                label="Goal Weight (Kg)"
                                placeholder="Type something"
                                onChangeText={props.handleChange("weightInKg")}
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

export default CreateExercise;
