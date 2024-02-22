/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import Translate from './Translate';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
        <Translate />
    </View>
  );
}
