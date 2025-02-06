import React from 'react'
import {View, SafeAreaView, TextInput, Text, TouchableOpacity} from 'react-native'  
import { AuthStackParamList } from '../../navigation/Types'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { styles } from '../styles';
type RoleSelectionProps = NativeStackScreenProps<AuthStackParamList, 'RoleSelection'>
const RoleSelection = ({navigation}: RoleSelectionProps) => {
  return (
    <SafeAreaView style={styles.container}>
        <View>
        <Text style={styles.title}>Role Selection</Text>
        </View>
        <TouchableOpacity style={styles.button2}><Text style={styles.textBody}>Commuter</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={()=>{navigation.navigate('DriverRegistration')}}><Text style={styles.textBody}>Driver</Text></TouchableOpacity>
    </SafeAreaView>
  )
}

export default RoleSelection;
