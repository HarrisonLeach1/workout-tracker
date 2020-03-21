import React from "react";
import {
    Appbar,
    Surface,
    Title,
    FAB,
    withTheme,
    Theme
} from "react-native-paper";
import { RouteComponentProps } from "react-router";
import {
    StyleProp,
    ViewStyle,
    StyleSheet,
    TextInput,
    View
} from "react-native";
import { FormikProps } from "formik";
import { RoutineFormValues } from "./CreateRoutineScreen";

interface ICreateRoutineHeaderProps extends RouteComponentProps {
    theme: Theme;
    formikProps: FormikProps<RoutineFormValues>;
}

const CreateRoutineHeader: React.FC<ICreateRoutineHeaderProps> = ({
    history,
    theme,
    formikProps
}: ICreateRoutineHeaderProps) => {
    return (
        <Surface
            style={
                {
                    ...styles.surface,
                    backgroundColor: theme.colors.primary
                } as StyleProp<ViewStyle>
            }
        >
            <Appbar.Header style={{ elevation: 0 }}>
                <Appbar.BackAction onPress={() => history.goBack()} />
                <Appbar.Content title="Create Workout Routine" />
                <Appbar.Action icon="check" onPress={() => formikProps.submitForm()} />
            </Appbar.Header>
            <View style={styles.textContainer}>
                <TextInput
                    autoFocus={true}
                    enablesReturnKeyAutomatically={true}
                    placeholderTextColor="#AFAFAF"
                    placeholder="Enter Routine Name"
                    selectionColor="#fff"
                    onChangeText={formikProps.handleChange("name")}
                    onBlur={formikProps.handleBlur("name")}
                    value={formikProps.values.name}
                    style={{
                        padding: 20,
                        fontSize: 20,
                        fontFamily: theme.fonts.light,
                        color: "#fff"
                    }}
                />
                <Title
                    style={{
                        padding: 20,
                        color: "#fff"
                    }}
                >
                    Exercises
                </Title>
            </View>
            <FAB
                style={styles.fab}
                icon="plus"
                onPress={() => {
                    history.push("/CreateExercise");
                }}
            />
        </Surface>
    );
};

const styles = StyleSheet.create({
    surface: {
        alignItems: "stretch",
        justifyContent: "flex-start",
        elevation: 4
    },
    textContainer: {
        alignItems: "stretch",
        justifyContent: "space-between"
    },
    fab: {
        position: "absolute",
        margin: 24,
        marginTop: 100,
        right: 0,
        bottom: -51
    }
});

export default withTheme(CreateRoutineHeader);
