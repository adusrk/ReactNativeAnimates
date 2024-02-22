/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { StyleSheet, View, Animated, TouchableWithoutFeedback } from "react-native";

export default function Animations() {
  const [animation] = useState(new Animated.Value(1));

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 2,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      animation.setValue(1);
    });
  };

  const animatedStyles = {
    transform: [
      { scale: animation },
    ],
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
