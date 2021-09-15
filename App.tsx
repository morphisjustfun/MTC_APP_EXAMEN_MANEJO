/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Text, View, SafeAreaView, StyleSheet, Image} from 'react-native';
import { colors } from './utils/colors';

const containerStyles = StyleSheet.create({
  containerTopBar: {
    flex: 0.08,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  containerTitle: {
    flex: 0.46,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  left: {
    flex: 0.46,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
});

const App = () => {
  return (
    <>
      <View style={containerStyles.containerTopBar}>
        <Image source={require('./assets/images/escudo.png')}/>
      </View>
      <View style={containerStyles.containerTitle}>
        <Text>MAMAMA</Text>
      </View>
      <View style={containerStyles.left}></View>
    </>
  );
};

export default App;
