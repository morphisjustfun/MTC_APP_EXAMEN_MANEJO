import React from 'react';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {View, Text} from 'react-native';
import {TimerPageProps} from '../types/TimerPage';
import {containerStyles, textStyles} from '../styles/TimerPage';
import {colors} from '../utils/colors';
import ButtonTimer from '../utils/components/ButtonTimer';
import {getConvertedTimer} from '../utils/utils';
import BackgroundView from '../utils/components/BackgroundView';
import CustomText from '../utils/components/CustomText';
import { ExternalSensor } from '../utils/requests/externalSensors';

const TimerPage: NavigationFunctionComponent<TimerPageProps> = props => {
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
      : new Date().getSeconds() - startTime.current.getSeconds();

  return (
    <View
      style={
        state === 'initial'
          ? containerStyles.initialRoot
          : containerStyles.afterRoot
      }>
      <View style={containerStyles.timerContainer}>
        <CustomText style={textStyles.timerText} typography="Lato-Italic">
          {actualDate !== undefined
            ? getConvertedTimer(actualDate)
            : '00:00:00'}
        </CustomText>
      </View>
      <View
        style={{
          backgroundColor: state === 'initial' ? colors.red : colors.secondary,
          flex: 0.05,
        }}
      />
      <View style={containerStyles.buttonContainer}>
        <ButtonTimer
          action={ async () => {
            if (state === 'initial') {
              setState('running');
              startTime.current = new Date();

              const response = await ExternalSensor.publish(
              {
                   "codigoEquipo": 2123,
                   "token": "a2131bC23123",
                   "action": "grabar",
                   "fechaHora": "2018-12-10T13:45:00.000Z",
                   "correlativo": "no se que viene",
                   "entidad": {
                     "codigo": 2132,
                     "nombre": "Turin"
                   },
                   "postulante":{
                       "tipoDoc": 3,
                       "nroDoc": "07899681"
                   } 
              }
              );

              console.log(response);
            }
            if (state === 'running') {
              setState('done');
            }
          }}
          title={state === 'initial' ? 'COMENZAR' : 'DETENER'}
        />
      </View>
    </View>
  );
};

export default TimerPage;
