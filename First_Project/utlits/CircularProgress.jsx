import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const CircularProgress = ({ percentage, size, strokeWidth, color, bgColor }) => {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: percentage,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [percentage]);

  const halfSize = size / 2;
  const radius = halfSize - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = progress.interpolate({
    inputRange: [0, 100],
    outputRange: [circumference, 0],
  });

  return (
    <View style={{ width: size, height: size }}>
      <View style={[styles.innerCircle, { borderRadius: halfSize, backgroundColor: bgColor }]}>
        <Animated.View style={{
          width: size,
          height: size,
          borderRadius: halfSize,
          transform: [{ rotate: '-90deg' }],
        }}>
          <Animated.View style={{
            width: size,
            height: size,
            borderRadius: halfSize,
            borderWidth: strokeWidth,
            borderColor: color,
            borderRightColor: 'transparent',
            borderBottomColor: 'transparent',
            position: 'absolute',
            strokeDasharray: [circumference, circumference],
            strokeDashoffset,
            transform: [{ rotate: '45deg' }],
          }} />
        </Animated.View>
      </View>
      <View style={[styles.innerCircle, { borderRadius: halfSize, backgroundColor: 'white', position: 'absolute', top: strokeWidth, left: strokeWidth, right: strokeWidth, bottom: strokeWidth }]}>
        <Text style={styles.text}>{`${Math.round(percentage)}%`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  innerCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: 'darkblue',
  },
});

CircularProgress.defaultProps = {
  size: 100,
  strokeWidth: 10,
  color: 'blue',
  bgColor: 'lightgray',
  percentage: 0,
};

export default CircularProgress;
