import React from 'react';
import {Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {buttonStyles} from '../../styles/UserInfoPage';
import CustomText from './CustomText';
import { colors } from '../colors';

interface CustomButtonProps {
  title: string;
  action: () => void;
  loading?: boolean;
}

export const CustomButton: React.FC<CustomButtonProps> = props => {
  return (
  <>
    {!props.loading ?
    (
    <TouchableOpacity style={buttonStyles.pressable} onPress={props.action}>
      <CustomText style={buttonStyles.text} typography="Lato-Regular">
        {props.title}
      </CustomText>
    </TouchableOpacity>
      ):
    <TouchableOpacity style={buttonStyles.pressable} onPress={() => {}}>
      <ActivityIndicator size='small' color={colors.white}/>
    </TouchableOpacity>
    }
    </>
  );
};
