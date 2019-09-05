import React from "react";
import { StyleSheet, KeyboardAvoidingView, ScrollView } from "react-native";
import { TextInput, Button } from "react-native-paper";

const CreateExercise = ({ history }) => {
    return (
        <KeyboardAvoidingView
            style={styles.wrapper}
            behavior="padding"
            keyboardVerticalOffset={80}
        >
            <ScrollView
                style={styles.container}
                keyboardShouldPersistTaps={"always"}
                removeClippedSubviews={false}
            >
                <TextInput
                    style={styles.inputContainerStyle}
                    label="Exercise Name"
                    placeholder="Type something"
                />

                <TextInput
                    style={styles.inputContainerStyle}
                    label="Number of Sets"
                    placeholder="Type something"
                />

                <TextInput
                    style={styles.inputContainerStyle}
                    label="Goal Repetitions"
                    placeholder="Type something"
                />

                <TextInput
                    style={styles.inputContainerStyle}
                    label="Goal Weight (Kg)"
                    placeholder="Type something"
                />
            </ScrollView>
            <Button mode="contained" onPress={console.log}>
                Create Exercise
            </Button>
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
