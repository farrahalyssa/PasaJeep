import React from 'react'
import { TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Image, Text, SafeAreaView,View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/Types';
import { styles } from '../styles';


type IntroProps = NativeStackScreenProps<AuthStackParamList, 'Intro'>
const Intro = ({navigation}: IntroProps) => {
  return (
   <SafeAreaView style={[styles.container]}>
        <Image style={{width:345, height:207, marginTop:'25%'}}source={require('../../assets/Icon/Logo/PasaJeep_Logo.png')} />
        <View>
          <Text style={[styles.textBody,{margin:'15%', marginTop: 0}]}>      Pasajeep tracks your feet in real-time and ensures smooth operation with automated preventive maintenance alerts.</Text>
          <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Register');}}><Text style={styles.buttonText}>Get Started</Text></TouchableOpacity>
        </View>

   </SafeAreaView>
  )
}

export default Intro
