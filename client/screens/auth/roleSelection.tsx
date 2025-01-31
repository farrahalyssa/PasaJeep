import React from 'react'
import {View, TextInput, Text, TouchableOpacity} from 'react-native'  
import { AuthStackParamList } from '../../navigation/Types'
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RoleSelectionProps = NativeStackScreenProps<AuthStackParamList, 'RoleSelection'>
const RoleSelection = ({navigation}: RoleSelectionProps) => {
  return (
    <View>
        <TouchableOpacity><Text>Commuter</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate('DriverRegistration')}}><Text>Driver</Text></TouchableOpacity>
    </View>
  )
}

export default RoleSelection;
