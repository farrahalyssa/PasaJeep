import React from 'react'
import { View, SafeAreaView, TextInput, TouchableOpacity, Text } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/Types';
import { styles } from '../styles';

type RegisterProps = NativeStackScreenProps<AuthStackParamList, 'Register'>

const Register = ({navigation}: RegisterProps) => {
  return (
   <SafeAreaView style={[styles.container, {flex:1, justifyContent:'center'}]}>
        <View style={{marginBottom:'10%'}}>
          <Text style={styles.title}>Welcome to PasaJeep!</Text>
          <Text style={styles.textBody}>Track Your Pasajeep Fleet in Real-Time</Text>
        </View>
          <TextInput style={styles.textInput}><Text>Full name</Text></TextInput>
          <TextInput style={styles.textInput}><Text>Email</Text></TextInput>
          <TextInput style={styles.textInput}><Text>Password</Text></TextInput>
          <TextInput style={styles.textInput}><Text>Confirm Password</Text></TextInput>
        <View style={{width:'100%'}}>
          <TouchableOpacity style={[styles.button]} onPress={()=>{navigation.navigate('RoleSelection')}}><Text style={styles.buttonText}>Register</Text></TouchableOpacity>
        </View>
        <View>
            <Text style={styles.subText}>
              Already have an account? 
              <TouchableOpacity onPress={() => { navigation.navigate('Login'); }}>
                <Text style={[styles.subText,{ color: '#55A9FC' }]}> Sign in</Text>
              </TouchableOpacity>
            </Text>
        </View>

   </SafeAreaView>
  )
}

export default Register;
