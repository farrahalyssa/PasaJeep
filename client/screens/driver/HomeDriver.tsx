import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Searchbar } from 'react-native-paper'

const HomeDriver = () => {

    const [searchQuery, setSearchQuery] = useState('');

  return (
   <View>
        <Text>Set Destination</Text>
        <Text>Select your destination from the map</Text>
        <Searchbar
        placeholder='Enter the address here'
        value={searchQuery}
        onChangeText={setSearchQuery}
        />

        {/* insert map */}

   </View>
  )
}

export default HomeDriver
