import React, { useContext } from "react";
import { StyleSheet, FlatList, View, ViewStyle, StyleProp } from "react-native";
import {
    List,
    Divider,
    Title,
    Appbar,
    Surface,
    Theme,
    FAB,
    withTheme
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
import CreateWorkoutHeader from "./CreateWorkoutHeader";

interface ICreateWorkoutScreenProps extends RouteComponentProps {
    theme: Theme;
}

interface WorkoutFormValues {
    name: string;
}

const CreateWorkoutScreen: React.FC<ICreateWorkoutScreenProps> = (
    props: ICreateWorkoutScreenProps
) => {
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

        props.history.goBack();
    };

    return (
        <Formik
            initialValues={{
                name: ""
            }}
            onSubmit={values => handleCreate(values)}
        >
            {(formikProps: FormikProps<WorkoutFormValues>) => (
                <View style={styles.screen}>
                    <CreateWorkoutHeader {...props} />
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
                </View>
            )}
        </Formik>
    );
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    surface: {
        alignItems: "stretch",
        justifyContent: "flex-start",
        elevation: 4
    },
    fab: {
        position: "absolute",
        margin: 24,
        marginTop: 100,
        right: 0,
        bottom: -51
    }
});

export default withTheme(CreateWorkoutScreen);
