/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { StyleSheet, View, Animated, TouchableWithoutFeedback, TouchableOpacity } from "react-native";

export default function Timing() {
  const [animation, setAnimation] = useState(new Animated.Value(1));

  const startAnimation = () => {
    Animated.timing(animation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        Animated.timing(animation, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }).start();
      });
  };

  const animatedStyles = {
    opacity: animation,
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
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: "tomato",
  },
});
