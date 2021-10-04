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

const LoginTouring: NavigationFunctionComponent = props => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <KeyboardAvoidingView style={rootStyles.root}>
      <BackgroundView/>
      <View style={{
        flex: 0.1,
      }}>
        <LogoTopBar />
      </View>
      <View style={{
        flex: 0.9,
      }}>
        <View style={{
          flex: 0.5,
        }}>
          <View style={containerStyles.containerTitle}>
            <Text style={textStyles.title}>
              Examen de manejo en vía pública
            </Text>
          </View>
          <View style={containerStyles.containerText1} >
            <Text style={textStyles.text1}>
              Iniciar sesión
            </Text>
          </View>
        </View>
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <View style={{
            width: '88%',height: '90%',
            borderWidth: 1,borderRadius: 25,borderColor: colors.primary,
          }}>
            <View style={containerStyles.containerText2} >
              <Text style={textStyles.text2}>
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
            <View style={containerStyles.containerText3} >
              <Text style={textStyles.text3}>
                Olvidé mi contraseña
              </Text>
            </View>
          </View>
        </View>
        <View style={{
          flex: 0.2,
        }}>
        </View>
      </View>  
    </KeyboardAvoidingView>
  );
};

export default LoginTouring;
