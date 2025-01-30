import React from 'react'
import {View, TextInput, Text, TouchableOpacity} from 'react-native'  

const DriverRegistration = () => {
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
