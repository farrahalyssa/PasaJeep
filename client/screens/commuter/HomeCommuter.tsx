import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper';
import { View, TouchableOpacity, Text } from 'react-native';

const HomeCommuter = () => {
    const [searchQuery, setSearchQuery] = useState('');
  return (
    <View>
        <Searchbar 
        placeholder="Search a location"
        value={searchQuery}
        onChangeText={setSearchQuery}
        />   
        <TouchableOpacity><Text>Track Jeepney</Text></TouchableOpacity>
        <TouchableOpacity><Text>Next Ride Info</Text></TouchableOpacity>
        <TouchableOpacity><Text>Set Destination</Text></TouchableOpacity>
        <View>
            <Text>Your current location</Text>
            <Text>Starbucks Fastbytes</Text>
            <Text>Northgate Cyberzone</Text>

        </View>
     </View>
  )
}

export default HomeCommuter
