import React, { useState, useContext } from "react";
import { StyleSheet, KeyboardAvoidingView, FlatList } from "react-native";
import { TextInput, List, Divider, Title } from "react-native-paper";
import { DummyData } from "../modules/DummyData";
import { WorkoutContext, WorkoutContextProps } from "../modules/WorkoutContext";

const CreateWorkout = ({ history }) => {
    const { workout, setWorkout } = useContext<WorkoutContextProps>(
        WorkoutContext
    );

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
                />
                <Title style={styles.exerciseTitle}>Exercises</Title>
                <Divider />
                <FlatList
                    renderItem={({ item }) => <List.Item title={item.title} />}
                    keyExtractor={item => item.title}
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
