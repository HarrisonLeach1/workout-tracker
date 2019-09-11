import React, { useContext } from "react";
import { StyleSheet, FlatList, View, ViewStyle, StyleProp } from "react-native";
import {
    TextInput,
    List,
    Divider,
    Title,
    Appbar,
    Surface,
    Theme,
    FAB
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
import { RouteComponentProps } from "react-router";

interface ICreateWorkoutProps extends RouteComponentProps {
    theme: Theme;
}

interface WorkoutFormValues {
    name: string;
}

const CreateWorkout = ({ history, theme }: ICreateWorkoutProps) => {
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
        <Formik
            initialValues={{
                name: ""
            }}
            onSubmit={values => handleCreate(values)}
        >
            {(props: FormikProps<WorkoutFormValues>) => (
                <React.Fragment>
                    <Surface
                        style={
                            {
                                ...styles.surface,
                                backgroundColor: theme.colors.primary
                            } as StyleProp<ViewStyle>
                        }
                    >
                        <Appbar.Header style={{ elevation: 0 }}>
                            <Appbar.BackAction onPress={goBack} />
                            <Appbar.Content title="Create Workout" />
                        </Appbar.Header>
                        <Title
                            style={{
                                padding: 20,
                                color: "#fff"
                            }}
                        >
                            Exercises
                        </Title>
                        <FAB
                            style={styles.fab}
                            icon="add"
                            onPress={() => {
                                history.push("/CreateExercise");
                            }}
                        />
                    </Surface>
                    <View>
                        <FlatList
                            renderItem={({ item }) => (
                                <List.Item title={item.name} />
                            )}
                            keyExtractor={item => item.name}
                            ItemSeparatorComponent={Divider}
                            data={workout.createExercisesInput}
                        />
                    </View>
                </React.Fragment>
            )}
        </Formik>
    );
};

const styles = StyleSheet.create({
    surface: {
        alignItems: "stretch",
        justifyContent: "flex-start",
        elevation: 4
    },
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
    fab: {
        position: "absolute",
        margin: 24,
        marginTop: 100,
        right: 0,
        bottom: -51
    }
});

export default CreateWorkout;
