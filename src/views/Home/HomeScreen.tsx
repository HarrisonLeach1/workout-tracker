import { RouteComponentProps } from "react-router";
import { Theme, BottomNavigation, withTheme } from "react-native-paper";
import RoutineScreen from "../Routine/RoutineScreen";
import React, { useState } from "react";
import ExerciseScreen from "../Exercise/ExerciseScreen";
import HistoryScreen from "../History/HistoryScreen";
import ProfileScreen from "../Profile/ProfileScreen";

export interface IHomeScreenProps extends RouteComponentProps {
  theme: Theme;
}

const HomeScreen: React.FC<IHomeScreenProps> = props => {
  const RoutineRoute = () => <RoutineScreen {...props} />;

  const ExerciseRoute = () => <ExerciseScreen {...props} />;

  const HistoryRoute = () => <HistoryScreen {...props} />;

  const ProfileRoute = () => <ProfileScreen {...props} />;

  const initialRouteState = {
    index: 0,
    routes: [
      { key: "routine", title: "Routines", icon: "play" },
      { key: "exercise", title: "Exercises", icon: "dumbbell" },
      { key: "history", title: "History", icon: "history" },
      { key: "profile", title: "Profile", icon: "account" }
    ]
  };

  const [routeState, setRouteState] = useState(initialRouteState);

  const handleIndexChange = index => setRouteState(prev => Object.assign({}, prev, { index: index }));

  const renderScene = BottomNavigation.SceneMap({
    routine: RoutineRoute,
    exercise: ExerciseRoute,
    history: HistoryRoute,
    profile: ProfileRoute
  });

  return <BottomNavigation navigationState={routeState} onIndexChange={handleIndexChange} renderScene={renderScene} />;
};

export default withTheme(HomeScreen);
