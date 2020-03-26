import React, { useState, useEffect } from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { NativeRouter } from "react-router-native";
import HomeScreen from "./views/Home/HomeScreen";
import CreateRoutineScreen from "./views/Create/CreateRoutineScreen";
import CreateExerciseScreen from "./views/Create/CreateExerciseScreen";
import { CreateRoutineContext, useCreateRoutineContext } from "./contexts/RoutineContext";
import { ApolloProvider } from "@apollo/react-hooks";
import { registerRootComponent } from "expo";
import Stack from "react-router-native-stack";
import { SelectedRoutineContext, useSelectedRoutine } from "./contexts/SelectedRoutineContext";
import WorkoutScreen from "./views/Workout/WorkoutScreen";
import Amplify, { Auth, Hub } from "aws-amplify";
import LoginScreen from "./views/Home/LoginScreen";
import { apolloClient } from "./config/apolloClientConfig";
import amplifyConfig from "./config/amplifyConfig";
import ProtectedRoute from "./routing/ProtectedRoute";

Amplify.configure(amplifyConfig);

const App: React.FC<{}> = () => {
  const creatingRoutine = useCreateRoutineContext();
  const selectedRoutine = useSelectedRoutine();

  // TODO: Not the best solution to check if a user is authenticated. But amplify currently does not provide 
  // an easy way to check if a user is logged in: https://github.com/aws-amplify/amplify-js/issues/3640
  // Should be updated once the above feature request is implemented. 
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    Hub.listen("auth", checkAuth); // listen for login/signup events

    // The login screen will still display for a little bit even if the user is logged in, because we 
    // must make this blocking request before rendering anything.
    checkAuth(); // check manually the first time because we won't get a Hub event
    return () => Hub.remove("auth", checkAuth); // cleanup
  }, []);

  const checkAuth = async () => {
    try {
      await Auth.currentAuthenticatedUser();
      setAuthenticated(true);
    } catch {
      setAuthenticated(false);
    }
  };

  if (!authenticated) {
    return (
      <PaperProvider theme={theme}>
        <LoginScreen theme={theme} />
      </PaperProvider>
    );
  }

  return (
    <ApolloProvider client={apolloClient}>
      <PaperProvider theme={theme}>
        <SelectedRoutineContext.Provider value={selectedRoutine}>
          <CreateRoutineContext.Provider value={creatingRoutine}>
            <NativeRouter>
              <Stack style={{ alignItems: "flex-start" }}>
                <ProtectedRoute authenticated={authenticated} exact path="/" component={HomeScreen} />
                <ProtectedRoute authenticated={authenticated} exact path="/Workout" component={WorkoutScreen} />
                <ProtectedRoute authenticated={authenticated} exact path="/CreateRoutine" component={CreateRoutineScreen} />
                <ProtectedRoute authenticated={authenticated} exact path="/CreateExercise" animationType="slide-vertical" component={CreateExerciseScreen} />
              </Stack>
            </NativeRouter>
          </CreateRoutineContext.Provider>
        </SelectedRoutineContext.Provider>
      </PaperProvider>
    </ApolloProvider>
  );
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#426d91",
    accent: "#0a4263"
  }
};

export default registerRootComponent(App);
