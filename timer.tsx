import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

interface ITimerProps {
    initialTimeInSeconds: number,
    initialIsActive: boolean
}

const Timer = ({ initialTimeInSeconds, initialIsActive }: ITimerProps) => {

    const [timeInSeconds, setTimeInSeconds] = useState(initialTimeInSeconds);
    const [isActive, setIsActive] = useState(initialIsActive);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setTimeInSeconds(timeInSeconds - 1);
            }, 1000);
        }

        // clean-up
        return () => clearInterval(interval);
    }, [isActive, timeInSeconds]);

    return (
        <View>
            <Text>{timeInSeconds}</Text>
        </View>
    );
}

export default Timer;