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
import { WorkoutInputs } from "../../modules/WorkoutTypes";
import { useNavigation } from "../../modules/NavigationTypes";
import { NavigationScreenProp, NavigationState } from "react-navigation";

interface WorkoutFormValues {
    name: string;
}

type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

interface NavigationParams {
    workout: WorkoutInputs;
}

interface NavStatelessComponent extends React.FC<{ theme: Theme }> {
    navigationOptions?: Object;
}

const CreateWorkoutScreen: NavStatelessComponent = ({ theme }) => {
    const navigation = useNavigation<NavigationParams>();
    const workout: WorkoutInputs = navigation.getParam("workout", {
        createWorkoutInput: {
            name: ""
        },
        createExercisesInput: []
    });

    CreateWorkoutScreen.navigationOptions = ({
        navigation
    }: {
        navigation: Navigation;
    }) => ({
        header: (
            <Appbar.Header>
                <Appbar.Content title="Create Workout" />
            </Appbar.Header>
        )
    });

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
        const newWorkoutMutation = await addWorkout();

        await addExercises(newWorkoutMutation);

        navigation.navigate("Home");
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
                            <Appbar.BackAction
                                onPress={() => navigation.goBack()}
                            />
                            <Appbar.Content title="Create Workout" />
                        </Appbar.Header>
                        <Title
                            style={{
                                padding: 20,
                                color: "#fff"
                            }}
                        >
                            Workout Name
                        </Title>
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
                                navigation.push("CreateExercise");
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

export default withTheme(CreateWorkoutScreen);
