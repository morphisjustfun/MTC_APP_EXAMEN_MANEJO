import { StyleSheet } from "react-native";
import { colors } from "../utils/colors";

export const containerStyles = StyleSheet.create({
   initialRoot:{
      backgroundColor: colors.red,
      flex:1
   },
   afterRoot:{
      backgroundColor: colors.secondary,
      flex:1
   },
   timerContainer: {
      flex: 0.3,
      justifyContent: 'flex-end',
      alignItems: 'center',
   },
   buttonContainer:{
      flex: 0.65,
      justifyContent: 'center',
      alignItems: 'center'
   },
})

export const textStyles = StyleSheet.create({
   timerText: {
      fontSize: 50,
      color: colors.white,
      fontStyle: 'italic'
   }
})

export const buttonTimerStyles = StyleSheet.create({
   root:{
      backgroundColor: colors.white,
      borderRadius: 180,
      width: 280,
      height: 280,
      alignItems: 'center',
      justifyContent: 'center'
   },
   text:{
      fontSize: 40,
      textAlign: 'center',
      fontWeight: 'bold',
   }
})
