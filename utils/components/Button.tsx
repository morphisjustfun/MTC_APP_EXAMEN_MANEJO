import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {buttonStyles} from '../../styles/UserInfoPage';
import CustomText from './CustomText';

interface CustomButtonProps {
  title: string;
  action: () => void;
}

export const CustomButton: React.FC<CustomButtonProps> = props => {
  return (
    <TouchableOpacity style={buttonStyles.pressable} onPress={props.action}>
      <CustomText style={buttonStyles.text} typography="Lato-Regular">
        {props.title}
      </CustomText>
    </TouchableOpacity>
  );
};
