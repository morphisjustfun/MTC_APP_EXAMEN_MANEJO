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
    backgroundColor: 'white',
  },
  left: {
    flex: 0.46,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.red,
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
    transform: [
      {scaleX: 1.5}
    ]
  },
  generalContainer: {
    flex: 1,
    backgroundColor: 'white',  
  },
});

const arrowStyles = StyleSheet.create({
  rect: {
    width: 20,
    height: 100,
    backgroundColor: 'white',
  },
  
  triangleDown: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 25,
    borderRightWidth: 25,
    borderBottomWidth: 50,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "white",
    transform: [{ rotate: "180deg" }],
  },
})

const topBarStyles = StyleSheet.create({
  logo: {
    flex: 0.35,
    marginLeft: 12,
  },
  divider: {
    width: 100,
    height: 45,
    backgroundColor: '#FFFFFF',
    flex: 0.005,
    marginRight: 12,
    marginLeft: 12
  },
  textAfterLogo: {
    flex: 0.645,
    color: '#FFFFFF',
    marginRight: 12
  },
});

const textStyles = StyleSheet.create({
  title: {
    fontFamily: 'Roboto',
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 38,
    letterSpacing: 0,
    textAlign: 'center',
    padding: 10
  },

  location: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: 'center',
  },

  identifier: {
    marginTop: 40,
    marginBottom: 40,
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: 'bold',
    lineHeight: 28,
    letterSpacing: 0,
    textAlign: 'center',
    color: 'white'
  }
})

const App = () => {
  const date = new Date();
  console.log(date.getHours());
  console.log(date.getMinutes());
  const [counterTime, setCounterTime] = React.useState(0);
  React.useEffect(() => {
    setTimeout(() => {
      setCounterTime(counterTime +1);
    },1000)
  },[counterTime]);
  return (
    <View style={containerStyles.generalContainer}>
      <View style={containerStyles.containerTopBar}>
        <Image
          source={require('./assets/images/escudo.png')}
          style={topBarStyles.logo}
          resizeMode="contain"
        />
        <View style={topBarStyles.divider}/>
        <Text style={topBarStyles.textAfterLogo}>
          Plataforma digital única del Estado Peruano
        </Text>
      </View>
      <View style={containerStyles.containerTitle}>
        <Text style={textStyles.title}>Sistema de examen de manejo en vía pública</Text>
        <Text style={textStyles.location}>Place holder {counterTime}</Text>
      </View>
      <View style={containerStyles.left}>
        <Text style={textStyles.identifier}>IDENTIFIQUESE</Text>
        <View style={arrowStyles.rect}></View>
        <View style={arrowStyles.triangleDown}></View>
      </View>
    </View>
  );
};

export default App;
