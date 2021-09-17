import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  Animated,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {colors} from './utils/colors';
import {getConvertedDate, getLastLocation, geoDecode} from './utils/utils';

import RNLocation, {Subscription, Location} from 'react-native-location';
import {Address} from './utils/types';

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
    transform: [{scaleX: 1.5}],
  },
  generalContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});

const arrowStyles = StyleSheet.create({
  arrowRect: {
    width: 20,
    height: 100,
    backgroundColor: 'white',
  },

  arrowTriangleDown: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 25,
    borderRightWidth: 25,
    borderBottomWidth: 50,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'white',
    transform: [{rotate: '180deg'}],
  },
  triangleContainer: {
    flex: 1,
    alignItems:'center',
  },
});

const topBarStyles = StyleSheet.create({
  logo: {
    flex: 0.35,
    marginLeft: 12,
    maxHeight: 60,
  },
  divider: {
    height: 45,
    backgroundColor: '#FFFFFF',
    flex: 0.005,
    marginRight: 12,
    marginLeft: 12,
    maxWidth: 2,
  },
  textAfterLogo: {
    flex: 0.645,
    color: '#FFFFFF',
    marginRight: 12,
    fontSize: 14,
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
    padding: 10,
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
    marginTop: 80,
    marginBottom: 40,
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: 'bold',
    lineHeight: 28,
    letterSpacing: 0,
    textAlign: 'center',
    color: 'white',
  },

});

const Arrow = () => {
  const [state, setState] = React.useState(new Animated.Value(0));
  const [counter, setCounter] = React.useState(0);

  const cycleLength = 2000;

  React.useEffect(() => {
    (() => {
      Animated.timing(state, {
        toValue: 30,
        duration: cycleLength,
        useNativeDriver: false,
      }).start(() => {
        Animated.timing(state, {
          toValue: 0,
          duration: cycleLength,
          useNativeDriver: false,
        }).start(() => {
          setCounter(counter + 1);
        });
      });
    })();
  }, [counter]);

  const arrowAnimationStyle = {
    marginTop: state,
  };

  return (
    <View style={arrowStyles.triangleContainer}>
      <Animated.View
        style={[arrowStyles.arrowRect, arrowAnimationStyle]}></Animated.View>
      <View style={arrowStyles.arrowTriangleDown}></View>
    </View>
  );
};

const App = () => {
  const [counterTime, setCounterTime] = React.useState(0);
  const [geoPermission, setGeoPermission] = React.useState(false);
  const [gpsLocation, setGpsLocation] = React.useState<Address | undefined>(
    undefined,
  );

  const getLocationCallBack = async (locations: Location[]) => {
    const lastLocation = getLastLocation(locations);
    const address = await geoDecode(
      lastLocation.latitude,
      lastLocation.longitude,
    );
    setGpsLocation(address.address);
  };

  React.useEffect(() => {
    setTimeout(() => {
      setCounterTime(counterTime + 1);
    }, 1000);
  }, [counterTime]);

  React.useEffect(() => {
    let subscription: Subscription;
    RNLocation.configure({
      distanceFilter: 100, // Meters
      desiredAccuracy: {
        ios: 'best',
        android: 'balancedPowerAccuracy',
      },
      // Android only
      androidProvider: 'auto',
      interval: 5000, // Milliseconds
      fastestInterval: 10000, // Milliseconds
      maxWaitTime: 5000, // Milliseconds
      // iOS Only
      activityType: 'other',
      allowsBackgroundLocationUpdates: false,
      headingFilter: 1, // Degrees
      headingOrientation: 'portrait',
      pausesLocationUpdatesAutomatically: false,
      showsBackgroundLocationIndicator: false,
    }).then(() => {
      RNLocation.getCurrentPermission().then(currentPermission => {
        if (currentPermission.startsWith('authorized')) {
          setGeoPermission(true);
          subscription =
            RNLocation.subscribeToLocationUpdates(getLocationCallBack);
          return subscription;
        }
        RNLocation.requestPermission({
          ios: 'whenInUse',
          android: {
            detail: 'coarse',
          },
        }).then(granted => {
          setGeoPermission(granted);
          if (granted) {
            subscription =
              RNLocation.subscribeToLocationUpdates(getLocationCallBack);
            return subscription;
          }
        });
      });
    });
  }, []);
  const currentDate = new Date();
  return (
    <View style={containerStyles.generalContainer}>
      <View style={containerStyles.containerTopBar}>
        <Image
          source={require('./assets/images/escudo.png')}
          style={topBarStyles.logo}
          resizeMode="contain"
        />
        <View style={topBarStyles.divider} />
        <Text style={topBarStyles.textAfterLogo}>
          Plataforma digital única del Estado Peruano
        </Text>
      </View>
      <View style={containerStyles.containerTitle}>
        <Text style={textStyles.title}>
          Sistema de examen de manejo en vía pública
        </Text>
        <Text style={textStyles.location}>
          {gpsLocation?.road}, {gpsLocation?.city}, {gpsLocation?.country}
        </Text>
        <Text style={textStyles.location}>{getConvertedDate(currentDate)}</Text>
      </View>
      <View style={containerStyles.left}>
        <Text style={textStyles.identifier}>IDENTIFIQUESE</Text>
        <Arrow />
      </View>
    </View>
  );
};

export default App;
