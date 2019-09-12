import {
    NavigationScreenProp,
    NavigationState,
    NavigationParams,
    Theme
} from "react-navigation";

type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

export interface NavigationProps {
    navigation: Navigation;
    theme: Theme;
}
