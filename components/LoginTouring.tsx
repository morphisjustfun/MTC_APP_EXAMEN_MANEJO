import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Button,
  TextInput,
  KeyboardAvoidingView,
  Image,
  Touchable,
  Keyboard,
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
import BackgroundView from '../utils/components/BackgroundView';
import KeyboardAvoidingWrapper from '../utils/components/KeyboardAvoidingViewWrapper';

const LoginTouring: NavigationFunctionComponent = props => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [showTitle, setShowTitle] = React.useState(true);

  Keyboard.addListener('keyboardDidShow', () => {
    setShowTitle(false);
  });
  
  Keyboard.addListener('keyboardDidHide', () => {
    setShowTitle(true);
  });


  return (
    <KeyboardAvoidingWrapper>
      <View style={rootStyles.root}>
        <BackgroundView />
        <LogoTopBar />
        <View style={containerStyles.containerNotLogo}>
          <View style={containerStyles.containerUpRed}>
            {showTitle && (
              <View style={containerStyles.containerTitle}>
                <Text style={textStyles.title}>
                  Examen de manejo en vía pública
                </Text>
              </View>
            )}
            <View style={containerStyles.containerTextIniciarSesion}>
              <Text style={textStyles.textIniciarSesion}>Iniciar sesión</Text>
            </View>
          </View>
          <View style={containerStyles.containerRed}>
              <View style={containerStyles.containerTextIngreseInfo}>
                <Text style={textStyles.textIngreseInfo}>
                  Ingrese su correo electrónico y contraseña asignada
                </Text>
              </View>
              <View style={containerStyles.containerTextFields}>
                <TextInput
                  style={textStyles.inputStyle}
                  value={username}
                  onChangeText={setUsername}
                  placeholder="Usuario"
                  placeholderTextColor={colors.greyText}
                />
                <TextInput
                  style={textStyles.inputStyle}
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Contraseña"
                  placeholderTextColor={colors.greyText}
                  secureTextEntry={true} 
                />
              </View>
              <View style={containerStyles.containerButton}>
                <CustomButton
                  title="INGRESAR"
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
              <View style={containerStyles.containerTextForgotPassword}>
                <Text style={textStyles.textForgotPassword}>Olvidé mi contraseña</Text>
              </View>
            </View>
        </View>
      </View>
    </KeyboardAvoidingWrapper>
  );
};

export default LoginTouring;
