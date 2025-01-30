import React from 'react'
import { TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/types';


type IntroProps = NativeStackScreenProps<AuthStackParamList, 'Intro'>
const Intro = ({navigation}: IntroProps) => {
  return (
   <View>
        <Text>PasaJeep</Text>
        <Text>Pasajeep tracks your feet in real-time and ensures smooth operation with automated preventive maintenance alerts.</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('Register');}}><Text>Get Started</Text></TouchableOpacity> 
   </View>
  )
}

export default Intro
