import React from 'react'
import { View, SafeAreaView, Image, TextInput, TouchableOpacity, Text } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/Types';
import { styles } from '../styles';

type LoginProps = NativeStackScreenProps<AuthStackParamList, 'Login'>

const Login = ({navigation}: LoginProps) => {
  return (
    <SafeAreaView style={[styles.container]}>
        <Image style={{width:345, height:207, marginTop:'10%' 
    }}source={require('../../assets/Icon/Logo/PasaJeep_Logo.png')} />
          <Text style={[styles.title, {textAlign:'center', marginBottom:'10%'}]}>Track. Hop on. Go.</Text>

        <View>
        </View>
        <TextInput style={styles.textInput}><Text>Email</Text></TextInput>
        <TextInput style={styles.textInput}><Text>Password</Text></TextInput>
       
        <View style={{width:'100%'}}>
          <TouchableOpacity style={[styles.button, {marginBottom:'2%'}]}><Text style={styles.buttonText}>SignIn</Text></TouchableOpacity>
          <TouchableOpacity style={{marginRight:'10%', alignItems:'flex-end', marginBottom:'15%'}}><Text style={[{fontWeight:'light', color: '#55A9FC', fontSize:12, fontFamily: 'Poppins_300Light' }]}>Forgot password?</Text></TouchableOpacity>
        </View>
        <View>
            <Text style={styles.subText}>
              Don't have an account? 
              <TouchableOpacity onPress={() => { navigation.navigate('Register'); }}>
                <Text style={[styles.subText,{ color: '#55A9FC' }]}>Sign up</Text>
              </TouchableOpacity>
            </Text>
        </View>
    </SafeAreaView>
  )
}

export default Login;