import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Button,
  TextInput,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import {rootStyles, containerStyles, textStyles} from '../styles/LoginTuring';
import LogoTopBar from '../utils/components/LogoTopBar';
import {NavigationFunctionComponent, Navigation} from 'react-native-navigation';
import {CustomButton} from '../utils/components/Button';

import {colors} from '../utils/colors';

import {pages} from '../constants/pages';
import {Supervisor} from '../utils/requests/supervisor';
import {TouringInfoProps} from '../types/TouringInfo';
import Background from '../assets/images/background';

const LoginTouring: NavigationFunctionComponent = props => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <KeyboardAvoidingView style={rootStyles.root}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}>
        <Background
          style={{flex: 1, opacity: 0.9}}
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid"
        />
      </View>
      <LogoTopBar />
      <View style={containerStyles.containerTitle}>
        <Text style={textStyles.title}>
          Sistema de examen de manejo en vía pública
        </Text>
      </View>
      <View style={{flex: 0.1}} />
      <View style={containerStyles.containerTextFields}>
        <TextInput
          style={textStyles.inputStyle}
          value={username}
          onChangeText={setUsername}
          placeholder="Usuario"
          placeholderTextColor={colors.greyText}
        />
        <TextInput
          style={{...textStyles.inputStyle}}
          value={password}
          onChangeText={setPassword}
          placeholder="Contraseña"
          placeholderTextColor={colors.greyText}
        />
      </View>
      <View style={containerStyles.containerButton}>
        <CustomButton
          title="CONTINUAR"
          action={async () => {
            const supervisor = await Supervisor.getSupervisor(
              username,
              password,
            );
            Navigation.push<TouringInfoProps>(props.componentId, {
              component: {
                name: pages.TOURINGINFOPAGE,
                passProps: {
                  ...supervisor,
                },
              },
            });
          }}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginTouring;
