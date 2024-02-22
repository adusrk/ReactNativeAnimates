/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

export default function Translate() {
  const [animation] = useState(new Animated.Value(0));

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 300,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(animation, {
        toValue: -300,
        duration: 2000,
        useNativeDriver: true,
      }).start(() => {
        Animated.timing(animation, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
        }).start();
      });
    });
  };

  const animatedStyles = {
    transform: [{translateY: animation}],
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]} />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 150,
    height: 150,
    borderRadius: 150,
    backgroundColor: 'tomato',
  },
});
