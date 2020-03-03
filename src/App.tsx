import React, { useState, useMemo, useEffect } from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { NativeRouter, Route, Switch } from "react-router-native";
import WorkoutScreen from "./views/Workout/WorkoutScreen";
import HomeScreen from "./views/Home/HomeScreen";
import CreateRoutineScreen from "./views/Create/CreateRoutineScreen";
import CreateExerciseScreen from "./views/Create/CreateExerciseScreen";
import {
    CreateRoutineContext,
    RoutineInputs,
    useCreateRoutineContext
} from "./modules/RoutineContext";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { InMemoryCache } from "apollo-cache-inmemory";
import awsconfig from "../aws-exports";
import { registerRootComponent } from "expo";
import Stack from "react-router-native-stack";
import {
    SelectedRoutineContext,
    useSelectedRoutine
} from "./modules/SelectedRoutineContext";
import { persistCache } from "apollo-cache-persist";
import { View, AsyncStorage } from "react-native";
import { HttpLink } from "apollo-link-http";
import { RetryLink } from "apollo-link-retry";

const App = () => {
    let creatingRoutine = useCreateRoutineContext();
    let selectedRoutine = useSelectedRoutine();

    return (
        <PaperProvider theme={theme}>
            <SelectedRoutineContext.Provider value={selectedRoutine}>
                <CreateRoutineContext.Provider value={creatingRoutine}>
                    <NativeRouter>
                        <Stack style={{ alignItems: "flex-start" }}>
                            <Route exact path="/" component={HomeScreen} />
                            <Route
                                exact
                                path="/Workout"
                                component={WorkoutScreen}
                            />
                            <Route
                                exact
                                path="/CreateRoutine"
                                component={CreateRoutineScreen}
                            />
                            <Route
                                exact
                                path="/CreateExercise"
                                animationType="slide-vertical"
                                component={CreateExerciseScreen}
                            />
                        </Stack>
                    </NativeRouter>
                </CreateRoutineContext.Provider>
            </SelectedRoutineContext.Provider>
        </PaperProvider>
    );
};

const WithProvider = () => {
    const [client, setClient] = useState(undefined);

    useEffect(() => {
        const retryLink = new RetryLink({
            delay: {
                initial: 1000
            },
            attempts: {
                max: 1000,
                retryIf: (error, _operation) => {
                    if (error.message === "Network request failed") {
                        if (
                            _operation.operationName === "createRoutine" ||
                            _operation.operationName === "createExercise"
                        ) {
                            return true;
                        }
                    }
                    return false;
                }
            }
        });

        const httpLink = new HttpLink({
            // uri: awsconfig.aws_appsync_graphqlEndpoint,
            // headers: {
            //     "X-Api-Key": awsconfig.aws_appsync_apiKey
            // }
        });
        const link = ApolloLink.from([retryLink, httpLink]);

        const cache = new InMemoryCache();

        const client = new ApolloClient({
            link,
            cache
        });

        const initData = {};

        cache.writeData({ data: initData });

        // See above for additional options, including other storage providers.
        persistCache({
            cache,
            storage: AsyncStorage
        }).then(() => {
            client.onResetStore(async () =>
                cache.writeData({ data: initData })
            );
            setClient(client);
        });
        return () => {};
    }, []);

    if (client === undefined) return <View></View>;

    return (
        // TODO: Fix cast here by adding properties to client
        <ApolloProvider client={client as any}>
            <App />
        </ApolloProvider>
    );
};

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: "#00838f",
        accent: "#4fb3bf"
    }
};

export default registerRootComponent(WithProvider);
