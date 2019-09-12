import { NavigationState, NavigationParams } from "react-navigation";
import { Theme } from "react-native-paper";
import { useContext } from "react";
import {
    NavigationScreenProp,
    NavigationRoute,
    NavigationContext
} from "react-navigation";

// Very helpful navigation hooks and types taken from:
// https://dev.to/andreasbergqvist/react-navigation-with-typescript-29ka
export type Navigation = NavigationScreenProp<
    NavigationState,
    NavigationParams
>;

export function useNavigation<Params>() {
    return useContext(NavigationContext) as NavigationScreenProp<
        NavigationRoute,
        Params
    >;
}
