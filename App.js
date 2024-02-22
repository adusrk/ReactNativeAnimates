/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import Timing from './Timing';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
        <Timing />
    </View>
  );
}
