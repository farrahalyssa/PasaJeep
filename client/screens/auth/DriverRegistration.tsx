import React from 'react'
import {View, SafeAreaView, TextInput, Text, TouchableOpacity} from 'react-native'  
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/Types';
import { styles } from '../styles';
type DriverRegistrationProps = NativeStackScreenProps<AuthStackParamList, 'DriverRegistration'>

const DriverRegistration = ({navigation}: DriverRegistrationProps) => {
  return (
    <SafeAreaView>
        <Text style={[styles.title, {textAlign:'center'}]}>Driver Registration</Text>
        <Text style={[styles.textBody, {marginHorizontal:'12%'}]}>Provide your details</Text>
        <View style={{width:'100%', alignItems:'center'}}>
        <TextInput editable={false} style={styles.texInput}><Text>Eduardo Dela Cruz</Text></TextInput>
        <TextInput style={styles.texInput}><Text>Jeepney Plate no.</Text></TextInput>
        <TextInput style={styles.texInput}><Text>Route or Franchise details</Text></TextInput>
        <View style={{width:'100%', alignItems:'center'}}>
            <TextInput style={styles.texInput}><Text>Jeepney Model and Year</Text></TextInput>
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
