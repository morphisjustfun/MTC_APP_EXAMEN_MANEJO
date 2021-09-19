import React from 'react';
import {View, Text, ActivityIndicator, Button} from 'react-native';
import {
  rootStyles,
  containerStyles,
  textStyles,
  userCardStyles,
} from '../styles/UserInfoPage';
import LogoTopBar from '../utils/components/LogoTopBar';
import {NavigationFunctionComponent, Navigation} from 'react-native-navigation';
import {UserInfoProps} from '../types/UserInfoPage';
import {User, UserType} from '../utils/requests/user';
import {CustomButton} from '../utils/components/Button';
import {colors} from '../utils/colors';
import {pages} from '../constants/pages';
import {TimerPageProps} from '../types/TimerPage';

const UserInfoPage: NavigationFunctionComponent<UserInfoProps> = props => {
  const [user, setUser] = React.useState<UserType | undefined>(undefined);
  React.useEffect(() => {
    (async () => {
      const response = await User.getUser(props.dni);
      setUser(response);
    })();
  }, []);
  return (
    <View style={rootStyles.root}>
      <LogoTopBar />
      <View style={containerStyles.containerTitle}>
        <Text style={textStyles.title}>Información del postulante</Text>
      </View>
      <View style={{flex: 0.1}} />
      {/* // WARNING activity indicator size only works in android */}
      {user === undefined ? (
        <>
          <View style={containerStyles.containerSpinLoader}>
            <ActivityIndicator size={56} color={colors.secondary} />
          </View>
        </>
      ) : (
        <>
          <View style={containerStyles.containerUserCard}>
            <View style={userCardStyles.divider} />
            <View style={userCardStyles.textBox}>
              <View style={userCardStyles.key}>
                <Text style={userCardStyles.valueText}>Nombre</Text>
              </View>
              <View style={userCardStyles.value}>
                <Text style={userCardStyles.keyText}>{user?.name}</Text>
              </View>
            </View>
            <View style={userCardStyles.divider} />
            <View style={userCardStyles.textBox}>
              <View style={userCardStyles.key}>
                <Text style={userCardStyles.valueText}>DNI</Text>
              </View>
              <View style={userCardStyles.value}>
                <Text style={userCardStyles.keyText}>{props.dni}</Text>
              </View>
            </View>
            <View style={userCardStyles.divider} />
            <View style={userCardStyles.textBox}>
              <View style={userCardStyles.key}>
                <Text style={userCardStyles.valueText}>Categoría</Text>
              </View>
              <View style={userCardStyles.value}>
                <Text style={userCardStyles.keyText}>{user?.type}</Text>
              </View>
            </View>
            <View style={userCardStyles.divider} />
          </View>
          <View style={containerStyles.containerButton}>
            <CustomButton
              title="CONTINUAR"
              action={() => {
                Navigation.push<TimerPageProps>(props.componentId, {
                  component: {
                    name: pages.TIMERPAGE,
                    passProps: {
                      dni: props.dni,
                    },
                  },
                });
              }}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default UserInfoPage;
