import React from 'react';
import {
    Animated, Image, Text,
    View
} from 'react-native';
import RNLocation, { Location, Subscription } from 'react-native-location';
import { Address } from '../utils/types';
import { geoDecode, getConvertedDate, getConvertedLocation, getLastLocation } from '../utils/utils';
import {containerStyles, arrowStyles, topBarStyles, textStyles} from '../styles/App';

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
          source={require('../assets/images/escudo.png')}
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
          {getConvertedLocation(gpsLocation)}
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
