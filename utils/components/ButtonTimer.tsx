import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {buttonTimerStyles} from '../../styles/TimerPage';

interface ButtonTimerProps {
  action: () => void,
  title: string
}

const ButtonTimer: React.FC<ButtonTimerProps> = props => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.action}>
      <View style={buttonTimerStyles.root}>
        <Text style={buttonTimerStyles.text}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonTimer;
