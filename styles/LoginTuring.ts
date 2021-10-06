import {StyleSheet} from 'react-native';
import {colors} from '../utils/colors';

export const rootStyles = StyleSheet.create({
  root: {
    backgroundColor: colors.white,
    flex: 1,
  },
});

export const containerStyles = StyleSheet.create({
  containerTitle: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  containerText1: {
    flex: 0.5,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  containerText2: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerTextFields: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerButton: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0.5,
  },
  containerText3: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const textStyles = StyleSheet.create({
  title: {
    fontFamily: 'Roboto',
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 38,
    letterSpacing: 0,
    textAlign: 'center',
    padding: 10,
  },
  inputStyle: {
    marginHorizontal: 32,
    borderWidth: 1,
    padding: 11,
    marginBottom: 10,
    color: colors.black,
    borderColor: colors.greyText,
    fontWeight: 'bold',
    fontSize: 16,
    borderRadius: 50,
    backgroundColor: colors.white,
    width: "90%",
  },
  text1:{
    fontFamily: 'Roboto',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 38,
    letterSpacing: 0,
    textAlign: 'center',
    padding: 10,
  },
  text2:{
    fontFamily: 'Roboto',
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 38,
    letterSpacing: 0,
    textAlign: 'center',
  },
  text3:{
    fontFamily: 'Roboto',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 38,
    letterSpacing: 0,
    textAlign: 'center',
    color: colors.primary,
    textDecorationLine: 'underline',
  },
});
