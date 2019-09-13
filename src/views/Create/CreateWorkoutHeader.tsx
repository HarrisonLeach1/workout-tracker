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
import { StyleProp, ViewStyle, StyleSheet } from "react-native";

interface ICreateWorkoutHeaderProps extends RouteComponentProps {
    theme: Theme;
}

const CreateWorkoutHeader: React.FC<ICreateWorkoutHeaderProps> = ({
    history,
    theme
}: ICreateWorkoutHeaderProps) => {
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
    );
};

const styles = StyleSheet.create({
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

export default withTheme(CreateWorkoutHeader);
