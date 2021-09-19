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
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 38,
    letterSpacing: 0,
    textAlign: 'center',
    padding: 10,
  },
});

export const containerStyles = StyleSheet.create({
  containerTitle: {
    flex: 0.28,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  containerSpinLoader: {
    flex: 0.3,
  },
  containerUserCard: {
    flex: 0.27,
  },
  containerButton:{
     flex:0.27,
     justifyContent: 'center',
     alignItems: 'center'
  }
});

export const userCardStyles = StyleSheet.create({
  divider: {
    flex: 0.01,
    backgroundColor: colors.dividerCard,
  },
  textBox: {
    flex: 0.32,
    flexDirection: 'row',
    marginHorizontal: 18
  },
  key: {
    flex: 0.25,
    justifyContent: 'center',
    marginRight: 10
  },
  value: {
    flex: 0.75,
    justifyContent: 'center',
  },
  valueText: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  keyText:{
     fontSize: 17,
  }
});

export const buttonStyles = StyleSheet.create({
   pressable: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      backgroundColor: colors.secondary
   },
   text:{
      color: colors.white,
      fontSize: 15
   }
})
