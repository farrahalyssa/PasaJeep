import React from 'react'
import {View, SafeAreaView, TextInput,Image, Text, TouchableOpacity} from 'react-native'  
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/Types';
import { styles } from '../styles';
type DriverRegistrationProps = NativeStackScreenProps<AuthStackParamList, 'DriverRegistration'>

const DriverRegistration = ({navigation}: DriverRegistrationProps) => {
  return (
    <SafeAreaView>
      <View style={{marginTop: '10%', alignItems:'center'}}>
        <Text style={[styles.title, {textAlign:'center'}]}>Driver Registration</Text>
        <Image source={require("../../assets/Icon/Logo/switch.png")} />
      </View>
        <Text style={[styles.textBody, {marginHorizontal:'12%', marginBottom:'4%'}]}>Provide your details</Text>
        <View style={{width:'100%', alignItems:'center'}}>
        <TextInput editable={false} style={styles.textInput}><Text>Eduardo Dela Cruz</Text></TextInput>
        <TextInput style={styles.textInput}><Text>Jeepney Plate no.</Text></TextInput>
        <TextInput style={styles.textInput}><Text>Route or Franchise details</Text></TextInput>
        <View style={{width:'100%', alignItems:'center'}}>
            <TextInput style={styles.textInput}><Text>Jeepney Model and Year</Text></TextInput>
            <Text style={{fontFamily:'Poppins_300Light',fontSize:10, marginTop:-5, fontStyle:'italic'}}>Format 'SR Jeepney Class II 2017'</Text>
        </View>
        <View style={{width:'100%'}}>
          <TouchableOpacity style={[styles.button]} onPress={()=>{}}><Text style={styles.buttonText}>Finish register</Text></TouchableOpacity>
        </View>
        </View>

    </SafeAreaView>
  )
}

export default DriverRegistration;
