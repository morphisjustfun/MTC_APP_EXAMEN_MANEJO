import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {buttonStyles} from '../../styles/UserInfoPage';

interface CustomButtonProps {
  title: string;
  action: () => void;
}

export const CustomButton: React.FC<CustomButtonProps> = props => {
  return (
    <TouchableOpacity style={buttonStyles.pressable} onPress={props.action}>
      <Text style={buttonStyles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};
