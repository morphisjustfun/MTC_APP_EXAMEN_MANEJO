import {StyleSheet} from 'react-native';
import {colors} from '../utils/colors';

export const rootStyles = StyleSheet.create({
  root: {
    backgroundColor: colors.white,
    flex: 1,
  },
});

export const textStyles = StyleSheet.create({
  title: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 20,
    letterSpacing: 1.5,
    textAlign: 'center',
    padding: 10,
    color: colors.primary,
  },
});

export const containerStyles = StyleSheet.create({
  containerNotLogo: {
    flex: 0.9,
    alignItems: 'center',
  },
  containerTitle: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerPhoto:{
    flex: 0.4,
    width: '40%',
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 10,
  },
  containerRed: {
    flex: 1,
    width: '88%',
    height: '90%',
    borderWidth: 1,
    borderRadius: 25,
    borderColor: colors.primary,
    marginBottom: 20,
    padding: 10,
  },
  containerButton: {
    flex: 0.20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  containerUserCard: {
    flex: 1,
  },
});

export const userCardStyles = StyleSheet.create({
  divider: {
    backgroundColor: colors.dividerCard,
  },
  textBox: {
    flex: 0.32,
    flexDirection: 'row',
    marginHorizontal: 18,
  },
  key: {
    flex: 0.25,
    justifyContent: 'center',
    marginRight: 10,
  },
  value: {
    flex: 0.75,
    justifyContent: 'center',
  },
  valueText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  keyText: {
    fontSize: 17,
  },
});

export const buttonStyles = StyleSheet.create({
  pressable: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: colors.secondary,
  },
  text: {
    color: colors.white,
    fontSize: 15,
  },
});
