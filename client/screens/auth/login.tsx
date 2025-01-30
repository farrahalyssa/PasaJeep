import React from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/types';


type LoginProps = NativeStackScreenProps<AuthStackParamList, 'Login'>

const Login = ({navigation}: LoginProps) => {
  return (
    <View>
        <TextInput><Text>Email</Text></TextInput>
        <TextInput><Text>Password</Text></TextInput>
        <TouchableOpacity><Text>Login</Text></TouchableOpacity>
        <Text>Don't have an account? <TouchableOpacity onPress={()=>{navigation.navigate('Register')}}><Text>Sign up</Text></TouchableOpacity></Text>
    </View>
  )
}

export default Login
