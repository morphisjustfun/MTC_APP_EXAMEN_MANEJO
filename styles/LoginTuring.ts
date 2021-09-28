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
    flex: 0.28,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  containerTextFields: {
    flex: 0.2,
    justifyContent: 'center',
  },
  containerButton: {
    flex: 0.34,
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
    borderWidth: 2,
    padding: 10,
    marginBottom: 30,
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 18,
  },
});
