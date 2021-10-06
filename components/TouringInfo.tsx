import React from 'react';
import {NavigationFunctionComponent, Navigation} from 'react-native-navigation';
import {TouringInfoProps} from '../types/TouringInfo';
import {
  rootStyles,
  containerStyles,
  textStyles,
  userCardStyles,
} from '../styles/TouringInfo';
import {View, Text} from 'react-native';
import LogoTopBar from '../utils/components/LogoTopBar';
import {CustomButton} from '../utils/components/Button';
import {pages} from '../constants/pages';
import BackgroundView from '../utils/components/BackgroundView';

const TouringInfo: NavigationFunctionComponent<TouringInfoProps> = props => {
  return (
    <View style={rootStyles.root}>
      <BackgroundView/>
        <LogoTopBar />
      <View style={{
        flex: 0.9,
      }}>
        <View style={containerStyles.containerTitle}>
          <Text style={textStyles.title}> Información del evaluador </Text>
        </View>
        <View style={{flex: 0.06}} />
        <View style={containerStyles.containerUserCard}>
          <View style={userCardStyles.divider} />
          <View style={userCardStyles.textBox}>
            <View style={userCardStyles.key}>
              <Text style={userCardStyles.valueText}>Entidad</Text>
            </View>
            <View style={userCardStyles.value}>
              <Text style={userCardStyles.keyText}>{props.entity}</Text>
            </View>
          </View>
          <View style={userCardStyles.divider} />
          <View style={userCardStyles.textBox}>
            <View style={userCardStyles.key}>
              <Text style={userCardStyles.valueText}>Tipo de entidad</Text>
            </View>
            <View style={userCardStyles.value}>
              <Text style={userCardStyles.keyText}>{props.entityType}</Text>
            </View>
          </View>
          <View style={userCardStyles.divider} />
          <View style={userCardStyles.textBox}>
            <View style={userCardStyles.key}>
              <Text style={userCardStyles.valueText}>Usuario</Text>
            </View>
            <View style={userCardStyles.value}>
              <Text style={userCardStyles.keyText}>{props.name}</Text>
            </View>
          </View>
          <View style={userCardStyles.divider} />
          <View style={userCardStyles.textBox}>
            <View style={userCardStyles.key}>
              <Text style={userCardStyles.valueText}>Tipo Perfil</Text>
            </View>
            <View style={userCardStyles.value}>
              <Text style={userCardStyles.keyText}>{props.type}</Text>
            </View>
          </View>
          <View style={userCardStyles.divider} />
        </View>
        <View style={containerStyles.containerButton}>
          <CustomButton
            title="CONTINUAR"
            action={() => {
              Navigation.push(props.componentId, {
                component: {
                  name: pages.APP,
                },
              });
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default TouringInfo;
