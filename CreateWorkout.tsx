import React, { useState } from "react";
import {
    View,
    StyleSheet,
    KeyboardAvoidingView,
    ScrollView,
    FlatList
} from "react-native";
import {
    TextInput,
    Appbar,
    List,
    Divider,
    Subheading,
    Headline,
    Title
} from "react-native-paper";
import useForm from "react-hook-form";
import { DummyData } from "./DummyData";

const CreateWorkout = ({ history }) => {
    const [exercises, setExercises] = useState<Exercise[]>(
        DummyData[0].exercises
    );
    const { register, handleSubmit } = useForm();
    const onSubmit = console.log;

    const handleBackPress = () => history.push("/");

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
                    ref={register}
                />
                <Title style={styles.exerciseTitle}>Exercises</Title>
                <Divider />
                <FlatList
                    renderItem={({ item }) => <List.Item title={item.title} />}
                    keyExtractor={item => item.title}
                    ItemSeparatorComponent={Divider}
                    data={exercises}
                    ListFooterComponent={
                        <React.Fragment>
                            <Divider />
                            <List.Item
                                title="Add Exercise"
                                left={props => (
                                    <List.Icon {...props} icon="add" />
                                )}
                                onPress={() =>
                                    console.log("Pressed add exercise")
                                }
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
