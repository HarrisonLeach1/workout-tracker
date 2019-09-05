import React from "react";
import {
    View,
    StyleSheet,
    KeyboardAvoidingView,
    ScrollView
} from "react-native";
import { TextInput } from "react-native-paper";
import useForm from "react-hook-form";

const CreateWorkout = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = console.log;

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
                {/*TODO: Is a Form component needed here? For semantics?*/}
                <TextInput
                    style={styles.inputContainerStyle}
                    label="Workout Name"
                    placeholder="Type something"
                    ref={register}
                />
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

export default CreateWorkout;
