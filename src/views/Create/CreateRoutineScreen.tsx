import React, { useContext } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { List, Divider, Theme, withTheme } from "react-native-paper";
import {
    CreateRoutineContextProps,
    CreateRoutineContext
} from "../../modules/RoutineContext";
import { useMutation } from "@apollo/react-hooks";
import { createRoutine, createExercise } from "../../graphql/mutations";
import {
    CreateRoutineMutation,
    CreateRoutineMutationVariables,
    CreateExerciseMutation,
    CreateExerciseMutationVariables
} from "../../API";
import gql from "graphql-tag";
import { Formik, FormikProps } from "formik";
import { ExecutionResult } from "apollo-link";
import { RouteComponentProps } from "react-router";
import CreateRoutineHeader from "./CreateRoutineHeader";

interface ICreateRoutineScreenProps extends RouteComponentProps {
    theme: Theme;
}

interface RoutineFormValues {
    name: string;
}

const CreateRoutineScreen: React.FC<ICreateRoutineScreenProps> = (
    props: ICreateRoutineScreenProps
) => {
    const { routine, setRoutine } = useContext<CreateRoutineContextProps>(
        CreateRoutineContext
    );

    const [addRoutine, { error, data }] = useMutation<
        CreateRoutineMutation,
        CreateRoutineMutationVariables
    >(gql(createRoutine), {
        variables: {
            input: {
                name: routine.createRoutineInput.name
            }
        }
    });

    const [addExercise] = useMutation<
        CreateExerciseMutation,
        CreateExerciseMutationVariables
    >(gql(createExercise));

    const addExercises = (
        newRoutineMutation: ExecutionResult<CreateRoutineMutation>
    ) => {
        const routineId = newRoutineMutation.data.createRoutine.id;
        console.log("Adding exercises for routine: " + routineId);
        routine.createExercisesInput.forEach(createExerciseInput => {
            addExercise({
                variables: {
                    input: {
                        ...createExerciseInput,
                        exerciseRoutineId: routineId
                    }
                }
            });
        });
    };

    const handleCreate = async (values: RoutineFormValues) => {
        setRoutine(prev => {
            prev.createRoutineInput.name = values.name;
            return prev;
        });

        const newRoutineMutation = await addRoutine();

        await addExercises(newRoutineMutation);

        props.history.goBack();
    };

    return (
        <Formik
            initialValues={{
                name: ""
            }}
            onSubmit={values => handleCreate(values)}
        >
            {(formikProps: FormikProps<RoutineFormValues>) => (
                <View style={styles.screen}>
                    <CreateRoutineHeader {...props} />
                    <View>
                        <FlatList
                            renderItem={({ item }) => (
                                <List.Item title={item.name} />
                            )}
                            keyExtractor={item => item.name}
                            ItemSeparatorComponent={Divider}
                            data={routine.createExercisesInput}
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

export default withTheme(CreateRoutineScreen);