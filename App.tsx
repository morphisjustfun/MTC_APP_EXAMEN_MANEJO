import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {colors} from './utils/colors';

const containerStyles = StyleSheet.create({
  containerTopBar: {
    flex: 0.08,
    flexDirection: 'row',
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
  generalContainer: {
    flex: 1,
  },
});

const topBarStyles = StyleSheet.create({
  logo: {
    flex: 0.35,
    marginLeft: 8,
  },
  divider: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
    flex: 10
  },
});

const App = () => {
  return (
    <View style={containerStyles.generalContainer}>
      <View style={containerStyles.containerTopBar}>
        <Image
          source={require('./assets/images/escudo.png')}
          style={topBarStyles.logo}
          resizeMode="contain"
        />
        <View style={topBarStyles.divider}/>
      </View>
      <View style={containerStyles.containerTitle}>
        <Text>jjj</Text>
      </View>
      <View style={containerStyles.left}></View>
    </View>
  );
};

export default App;
