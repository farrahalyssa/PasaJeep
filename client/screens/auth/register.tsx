import React from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/types';


type RegisterProps = NativeStackScreenProps<AuthStackParamList, 'Register'>

const Register = ({navigation}: RegisterProps) => {
  return (
   <View>
        <TextInput><Text>Full name</Text></TextInput>
        <TextInput><Text>Email</Text></TextInput>
        <TextInput><Text>Password</Text></TextInput>
        <TextInput><Text>Confirm Password</Text></TextInput>
        <TouchableOpacity><Text>Register</Text></TouchableOpacity>
        <Text>Already have an account? <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}><Text>Sign in</Text></TouchableOpacity></Text>
   </View>
  )
}

export default Register;
