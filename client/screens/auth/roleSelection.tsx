import React from 'react'
import {View, TextInput, Text, TouchableOpacity} from 'react-native'  

const RoleSelection = () => {
  return (
    <View>
        <TouchableOpacity><Text>Commuter</Text></TouchableOpacity>
        <TouchableOpacity><Text>Driver</Text></TouchableOpacity>
        <TouchableOpacity><Text>Continue</Text></TouchableOpacity>
    </View>
  )
}

export default RoleSelection;
