import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

interface ITimerProps {
    initialTimeInSeconds: number,
    initialIsActive: boolean
}

const Timer = ({ initialTimeInSeconds, initialIsActive }: ITimerProps) => {

    const [timeInSeconds, setTimeInSeconds] = useState(initialTimeInSeconds);
    const [isActive, setIsActive] = useState(initialIsActive);

    useEffect(() => {
        let interval = null;
        if (isActive && timeInSeconds > 0) {
            interval = setInterval(() => {
                setTimeInSeconds(timeInSeconds - 1);
            }, 1000);
        }

        // clean-up
        return () => clearInterval(interval);
    }, [isActive, timeInSeconds]);

    return (
        <View>
            <AnimatedCircularProgress
                size={150}
                width={3}
                fill={(timeInSeconds / 6) * 100}
                tintColor="#00e0ff"
                backgroundColor="#3d5875">
                {
                    (fill) => (
                        <Text>
                            {timeInSeconds}
                        </Text>
                    )
                }
            </AnimatedCircularProgress>
        </View >
    );
}

export default Timer;