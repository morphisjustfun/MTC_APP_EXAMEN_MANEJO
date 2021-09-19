import React from 'react';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {View, Text} from 'react-native';
import {TimerPageProps} from '../types/TimerPage';
import {containerStyles, textStyles} from '../styles/TimerPage';
import {colors} from '../utils/colors';
import ButtonTimer from '../utils/components/ButtonTimer';
import { getConvertedTimer } from '../utils/utils';

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

  return (
    <View
      style={
        state === 'initial'
          ? containerStyles.initialRoot
          : containerStyles.afterRoot
      }>
      <View style={containerStyles.timerContainer}>
        <Text style={textStyles.timerText}>{getConvertedTimer(counterDec)}</Text>
      </View>
      <View
        style={{
          backgroundColor: state === 'initial' ? colors.red : colors.secondary,
          flex: 0.05,
        }}
      />
      <View style={containerStyles.buttonContainer}>
        <ButtonTimer
          action={() => {
            if (state === 'initial') {
              setState('running');
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
