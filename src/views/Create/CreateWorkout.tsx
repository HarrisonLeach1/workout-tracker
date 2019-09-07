import React, { useContext } from "react";
import { StyleSheet, KeyboardAvoidingView, FlatList, View } from "react-native";
import {
    TextInput,
    List,
    Divider,
    Title,
    Button,
    Appbar
} from "react-native-paper";
import {
    WorkoutContext,
    WorkoutContextProps
} from "../../modules/WorkoutContext";
import { useMutation } from "@apollo/react-hooks";
import { createWorkout, createExercise } from "../../graphql/mutations";
import {
    CreateWorkoutMutation,
    CreateWorkoutMutationVariables,
    CreateExerciseMutation,
    CreateExerciseMutationVariables
} from "../../API";
import gql from "graphql-tag";
import { Formik, FormikProps } from "formik";
import { ExecutionResult } from "apollo-link";

interface WorkoutFormValues {
    name: string;
}

const CreateWorkout = ({ history }) => {
    const { workout, setWorkout } = useContext<WorkoutContextProps>(
        WorkoutContext
    );

    const [addWorkout, { error, data }] = useMutation<
        CreateWorkoutMutation,
        CreateWorkoutMutationVariables
    >(gql(createWorkout), {
        variables: {
            input: {
                name: workout.createWorkoutInput.name
            }
        }
    });

    const [addExercise] = useMutation<
        CreateExerciseMutation,
        CreateExerciseMutationVariables
    >(gql(createExercise));

    const addExercises = (
        newWorkoutMutation: ExecutionResult<CreateWorkoutMutation>
    ) => {
        const workoutId = newWorkoutMutation.data.createWorkout.id;
        console.log("Adding exercises for workout: " + workoutId);
        workout.createExercisesInput.forEach(createExerciseInput => {
            addExercise({
                variables: {
                    input: {
                        ...createExerciseInput,
                        exerciseWorkoutId: workoutId
                    }
                }
            });
        });
    };

    const handleCreate = async (values: WorkoutFormValues) => {
        setWorkout(prev => {
            prev.createWorkoutInput.name = values.name;
            return prev;
        });
        console.log(
            "Creating workout with name: " + workout.createWorkoutInput.name
        );

        const newWorkoutMutation = await addWorkout();

        await addExercises(newWorkoutMutation);

        history.push("/");
    };

    const goBack = () => {
        history.push("/");
    };

    return (
        <React.Fragment>
            <Appbar.Header>
                <Appbar.BackAction onPress={goBack} />
                <Appbar.Content title="Create Workout" />
            </Appbar.Header>
            <KeyboardAvoidingView
                style={styles.wrapper}
                behavior="padding"
                keyboardVerticalOffset={80}
            >
                <Formik
                    initialValues={{
                        name: ""
                    }}
                    onSubmit={values => handleCreate(values)}
                >
                    {(props: FormikProps<WorkoutFormValues>) => (
                        <View>
                            <TextInput
                                style={styles.inputContainerStyle}
                                label="Workout Name"
                                placeholder="Type something"
                                onChangeText={props.handleChange("name")}
                                onBlur={props.handleBlur("name")}
                                value={props.values.name}
                            />
                            <Title style={styles.exerciseTitle}>
                                Exercises
                            </Title>
                            <Divider />
                            <FlatList
                                renderItem={({ item }) => (
                                    <List.Item title={item.name} />
                                )}
                                keyExtractor={item => item.name}
                                ItemSeparatorComponent={Divider}
                                data={workout.createExercisesInput}
                                ListFooterComponent={
                                    <React.Fragment>
                                        <Divider />
                                        <List.Item
                                            title="Add Exercise"
                                            left={props => (
                                                <List.Icon
                                                    {...props}
                                                    icon="add"
                                                />
                                            )}
                                            onPress={() =>
                                                history.push("/CreateExercise")
                                            }
                                        />
                                        <Divider />
                                    </React.Fragment>
                                }
                            />
                            <Button
                                mode="contained"
                                /*TODO: Cast is needed here due to existing bug with Formik Types with React Native: 
                                https://github.com/jaredpalmer/formik/issues/376 */
                                onPress={props.handleSubmit as any}
                            >
                                Create Workout
                            </Button>
                        </View>
                    )}
                </Formik>
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
    },
    exerciseTitle: { margin: 16 }
});

export default CreateWorkout;
