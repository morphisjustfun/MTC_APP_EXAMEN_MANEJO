import React from 'react';
import { View, Image, Text } from "react-native";
import { containerStyles, topBarStyles } from "../../styles/App";

const LogoTopBar = () => {
  return (
    <View style={containerStyles.containerTopBar}>
      <Image
        source={require('../../assets/images/escudo.png')}
        style={topBarStyles.logo}
        resizeMode="contain"
      />
      <View style={topBarStyles.divider} />
      <Text style={topBarStyles.textAfterLogo}>
        Plataforma digital única del Estado Peruano
      </Text>
    </View>
  );
};

export default LogoTopBar;
