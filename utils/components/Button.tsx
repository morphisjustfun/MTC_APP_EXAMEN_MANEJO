import React from 'react';
import {Button, Pressable, Text} from 'react-native';
import {buttonStyles} from '../../styles/UserInfoPage';

interface CustomButtonProps {
  title: string;
  action: () => void;
}

export const CustomButton: React.FC<CustomButtonProps> = props => {
  return (
    <Pressable style={buttonStyles.pressable}>
      <Text style={buttonStyles.text}>{props.title}</Text>
    </Pressable>
  );
};
