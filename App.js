/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import Scale from './AniProperties/Scale';
export default function App() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
        <Scale />
    </View>
  );
}
