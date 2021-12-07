import React from 'react';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {View, Text, Button, Image, TouchableOpacity} from 'react-native';
import {TimerPageProps} from '../types/TimerPage';
import {containerStyles, textStyles} from '../styles/TimerPage';
import {colors} from '../utils/colors';
import ButtonTimer from '../utils/components/ButtonTimer';
import {getConvertedTimer} from '../utils/utils';
import CustomText from '../utils/components/CustomText';
import {ExternalSensor} from '../utils/requests/externalSensors';
import {CustomButton} from '../utils/components/Button';
import LogoTopBar from '../utils/components/LogoTopBar';
import {topBarStyles} from '../styles/App';
import {buttonStyles} from '../styles/UserInfoPage';

const getFormattedDate = () => {
  const originalDate = new Date();

  const formattedDate =
    originalDate.getFullYear() +
    '-' +
    (originalDate.getMonth() + 1) +
    '-' +
    originalDate.getDate() +
    '-' +
    originalDate.getHours() +
    '-' +
    originalDate.getMinutes() +
    '-' +
    originalDate.getSeconds();

  return formattedDate;
};

const TimerPage: NavigationFunctionComponent<TimerPageProps> = _props => {
  // initial | running  | done
  const [counterDec, setCounterDec] = React.useState(0);
  const [state, setState] = React.useState<'initial' | 'running' | 'done'>(
    'initial',
  );

  React.useEffect(() => {
    if (state === 'running') {
      setTimeout(() => {
        setCounterDec(counterDec + 1);
      }, 1000);
    }
  }, [counterDec, state]);

  const startTime = React.useRef<undefined | Date>(undefined);

  const actualDate =
    startTime.current === undefined
      ? undefined
      : Math.ceil(
          Math.abs(new Date().getTime() - startTime.current.getTime()) / 1000,
        );

  const callbackStop = async () => {
    const randomString = Math.random().toString(36).substring(2, 15);
    if (state === 'initial') {
      setState('running');
      startTime.current = new Date();

      try {
        await ExternalSensor.publish({
          codigoEquipo: 2123,
          token: randomString,
          action: 'grabar',
          fechaHora: getFormattedDate().toString(),
          correlativo: 'no se que viene',
          entidad: {
            codigo: 2132,
            nombre: 'Turin',
          },
          postulante: {
            tipoDoc: 3,
            nroDoc: '07899681',
          },
        });
      } catch (e) {
        console.log(e);
      }
    }
    if (state === 'running') {
      setState('done');

      try {
        await ExternalSensor.publish({
          codigoEquipo: 2123,
          token: randomString,
          action: 'detener',
          fechaHora: new Date().toString(),
          correlativo: 'no se que viene',
          entidad: {
            codigo: 2132,
            nombre: 'Turin',
          },
          postulante: {
            tipoDoc: 3,
            nroDoc: '07899681',
          },
        });
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <View
      style={
        state === 'initial'
          ? containerStyles.initialRoot
          : containerStyles.afterRoot
      }>
      <View style={containerStyles.containerTopBar}>
        {actualDate !== undefined ? (
          <>
            <TouchableOpacity style={{flex: 1}} onPress={callbackStop}>
              <CustomText
                style={{
                  ...topBarStyles.textAfterLogo,
                  flex: undefined,
                  fontSize: 20,
                  textAlign: 'center',
                  marginRight: 0,
                  color: colors.white,
                }}
                typography="Lato-Regular">
                Cancelar
              </CustomText>
            </TouchableOpacity>
            <View style={topBarStyles.divider} />
            <CustomText
              style={{
                ...topBarStyles.textAfterLogo,
                fontSize: 20,
                textAlign: 'center',
                flex: 1,
                marginRight: 0,
              }}
              typography="Lato-Regular">
              {getConvertedTimer(actualDate)}
            </CustomText>
          </>
        ) : (
          <CustomText
            style={{
              ...topBarStyles.textAfterLogo,
              textAlign: 'center',
              flex: 1,
              fontSize: 20,
            }}
            typography="Lato-Regular">
            Temporizador
          </CustomText>
        )}
      </View>

      {actualDate === undefined ? (
        <>
          <View style={containerStyles.timerContainer}>
            <CustomText style={textStyles.timerText} typography="Lato-Italic">
              {actualDate !== undefined
                ? getConvertedTimer(actualDate)
                : '00:00:00'}
            </CustomText>
          </View>

          <View
            style={{
              backgroundColor:
                state === 'initial' ? colors.red : colors.secondary,
              flex: 0.05,
            }}
          />
          <View style={containerStyles.buttonContainer}>
            <ButtonTimer
              action={callbackStop}
              title={state === 'initial' ? 'COMENZAR' : 'DETENER'}
            />
          </View>
        </>
      ) : (
        <CustomText
          typography="Lato-Regular"
          style={{
            textAlign: 'center',
            fontSize: 30,
            marginTop: 40,
            color: colors.white,
          }}>
          Formulario
        </CustomText>
      )}
    </View>
  );
};

export default TimerPage;
