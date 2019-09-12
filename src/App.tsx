import React from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { ApolloProvider } from "@apollo/react-hooks";
import awsconfig from "../aws-exports";
import ApolloClient from "apollo-boost";
import { registerRootComponent } from "expo";
import { createAppContainer } from "react-navigation";
import { AppNavigator } from "./AppNavigator";

const client = new ApolloClient({
    uri: awsconfig.aws_appsync_graphqlEndpoint,
    headers: {
        "X-Api-Key": awsconfig.aws_appsync_apiKey
    }
});

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
    return <AppContainer />;
};

const WithProvider = () => (
    // TODO: Fix cast here by adding properties to client
    <ApolloProvider client={client as any}>
        <PaperProvider theme={theme}>
            <App />
        </PaperProvider>
    </ApolloProvider>
);

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: "#00838f",
        accent: "#4fb3bf"
    }
};

export default registerRootComponent(WithProvider);
