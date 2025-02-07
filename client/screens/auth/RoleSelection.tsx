import React from 'react'
import {View, SafeAreaView, Image, Text, TouchableOpacity} from 'react-native'  
import { AuthStackParamList } from '../../navigation/Types'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { styles } from '../styles';
type RoleSelectionProps = NativeStackScreenProps<AuthStackParamList, 'RoleSelection'>
const RoleSelection = ({navigation}: RoleSelectionProps) => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={{alignItems:'center', marginTop: '10%'}}>
        <Text style={styles.title}>Role Selection</Text>
        <Image source={require("../../assets/Icon/Logo/switch.png")} />
        </View>
        <TouchableOpacity style={styles.button2}><Text style={styles.textBody}>Commuter</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={()=>{navigation.navigate('DriverRegistration')}}><Text style={styles.textBody}>Driver</Text></TouchableOpacity>
    </SafeAreaView>
  )
}

export default RoleSelection;
