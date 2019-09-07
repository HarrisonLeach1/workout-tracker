import React, { useContext } from "react";
import { StyleSheet, KeyboardAvoidingView, FlatList } from "react-native";
import { TextInput, List, Divider, Title, Button } from "react-native-paper";
import { WorkoutContext, WorkoutContextProps } from "../modules/WorkoutContext";
import { useMutation } from "@apollo/react-hooks";
import { createWorkout } from "../graphql/mutations";
import { CreateWorkoutInput } from "../API";
import gql from "graphql-tag";

const CreateWorkout = ({ history }) => {
    const { workout, setWorkout } = useContext<WorkoutContextProps>(
        WorkoutContext
    );

    const [addWorkout] = useMutation<any, CreateWorkoutInput>(
        gql(createWorkout),
        {
            variables: {
                name: workout.name,
                exercises: workout.exercises
            }
        }
    );

    const handleCreate = () => {
        addWorkout();
        history.push("/");
    };

    return (
        <React.Fragment>
            <KeyboardAvoidingView
                style={styles.wrapper}
                behavior="padding"
                keyboardVerticalOffset={80}
            >
                <TextInput
                    style={styles.inputContainerStyle}
                    label="Workout Name"
                    placeholder="Type something"
                    onChangeText={newText => {
                        setWorkout(prev => {
                            // could be error here because return prev prevents re-rendering
                            prev.name = newText;
                            return prev;
                        });
                    }}
                    value={workout.name}
                />
                <Title style={styles.exerciseTitle}>Exercises</Title>
                <Divider />
                <FlatList
                    renderItem={({ item }) => <List.Item title={item.name} />}
                    keyExtractor={item => item.name}
                    ItemSeparatorComponent={Divider}
                    data={workout.exercises}
                    ListFooterComponent={
                        <React.Fragment>
                            <Divider />
                            <List.Item
                                title="Add Exercise"
                                left={props => (
                                    <List.Icon {...props} icon="add" />
                                )}
                                onPress={() => history.push("/CreateExercise")}
                            />
                            <Divider />
                        </React.Fragment>
                    }
                />
                <Button
                    mode="contained"
                    /*TODO: Cast is needed here due to existing bug with Formik Types with React Native: 
                                https://github.com/jaredpalmer/formik/issues/376 */
                    onPress={handleCreate}
                >
                    Create Workout
                </Button>
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
