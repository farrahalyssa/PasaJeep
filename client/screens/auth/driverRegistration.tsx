import React from 'react'
import {View, TextInput, Text, TouchableOpacity} from 'react-native'  
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/types';

type DriverRegistrationProps = NativeStackScreenProps<AuthStackParamList, 'DriverRegistration'>

const DriverRegistration = ({navigation}: DriverRegistrationProps) => {
  return (
    <View>
        <Text>Provide your details</Text>
        <TextInput><Text>Jeepney Plate no.</Text></TextInput>
        <TextInput><Text>Route or Franchise details</Text></TextInput>
        <View>
            <TextInput><Text>Jeepney Model and Year</Text></TextInput>
            <Text>Format 'SR Jeepney Class II 2017'</Text>
        </View>
    </View>
  )
}

export default DriverRegistration;
