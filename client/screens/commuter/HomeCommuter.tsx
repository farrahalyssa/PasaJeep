import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper';
import { View, TouchableOpacity, Text, Image, SafeAreaView} from 'react-native';
import { styles } from '../styles';
const HomeCommuter = () => {
    const [searchQuery, setSearchQuery] = useState('');
  return (
    <SafeAreaView style={styles.container}>
        <Searchbar 
        style={{width:'80%', marginTop:'5%'}}
        placeholder="Search a location"
        value={searchQuery}
        onChangeText={setSearchQuery}
        />   
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%', marginTop: '10%' }}>
          <TouchableOpacity style={{flexDirection:'column',  alignItems: 'center'}}>
            <Image source={require("../../assets/Icon/Logo/jeep.png")} />
            <Text style={{fontFamily:'Poppins_100Light', paddingTop:'2%'}}>Nearby</Text>
            <Text style={{fontFamily:'Poppins_100Light'}}>Rides</Text>

          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection:'column',  alignItems: 'center'}}>
            <Image source={require("../../assets/Icon/Logo/jeep.png")} />
            <Text style={{fontFamily:'Poppins_100Light', paddingTop:'2%'}}>Find Ride</Text>
            
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection:'column', alignItems: 'center'}}>
            <Image source={require("../../assets/Icon/Logo/jeep.png")} />
            <Text style={{fontFamily:'Poppins_100Light', paddingTop:'2%'}}>Set Destination</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center', marginTop:'4%'}}>
            <Text style={{fontFamily:'Poppins_700Bold'}}>Your current location</Text>
            <Text style={styles.textBody}>Starbucks Fastbytes</Text>
            <Text style={styles.textBody}>Northgate Cyberzone</Text>
        </View>
        <Image  style={{marginTop:'4%'}} source={require("../../assets/fakeMap.png")}/>
     </SafeAreaView>
  )
}

export default HomeCommuter
