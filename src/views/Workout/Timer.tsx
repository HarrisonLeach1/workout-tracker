import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

interface ITimerProps {
  initialTimeInSeconds: number;
  isActive: boolean;
  isDecrementing: boolean;
  onZeroReached: () => void;
}

const Timer = ({ initialTimeInSeconds, isActive, isDecrementing, onZeroReached }: ITimerProps) => {
  const [timeInSeconds, setTimeInSeconds] = useState(initialTimeInSeconds);

  useEffect(() => {
    setTimeInSeconds(initialTimeInSeconds);
  }, [initialTimeInSeconds]);

  useEffect(() => {
    let interval = null;
    if (isActive && isDecrementing && timeInSeconds === 0) {
      onZeroReached();
    } else if (isActive) {
      interval = setInterval(() => {
        const change: number = isDecrementing ? -1 : 1;
        setTimeInSeconds(timeInSeconds + change);
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
        fill={isDecrementing ? (timeInSeconds / initialTimeInSeconds) * 100 : ((60 - timeInSeconds) / 60) * 100}
        tintColor="#00e0ff"
        backgroundColor="#3d5875"
      >
        {() => <Text>{timeInSeconds}</Text>}
      </AnimatedCircularProgress>
    </View>
  );
};

export default Timer;
