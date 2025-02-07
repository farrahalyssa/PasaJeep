import React from 'react'
import { Text, Image, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import { styles } from '../styles'

const FindRide = () => {
    const sampleJeepneyList = [
        { icon: require('../../assets/Icon/Logo/driver1.png'), driverName: 'Eduardo Dela Cruz', jeepNo: '1', plateNo: 'PYZ 331', location: 'Festival Mall', arrivingIn: '5', distance: '1.7' },
        { icon: require('../../assets/Icon/Logo/driver2.png'), driverName: 'Katrina Lopez', jeepNo: '2', plateNo: 'NPI 079', location: 'Northgate, Alabang', arrivingIn: '14', distance: '7' },
        { icon: require('../../assets/Icon/Logo/driver3.png'), driverName: 'Fernando De Guzman', jeepNo: '3', plateNo: 'TUP 868', location: 'Sucat', arrivingIn: '8', distance: '3' },

    ]
    return (
        <SafeAreaView>
            <View style={{flexDirection:'row', marginHorizontal: '10%', alignItems:'center', marginVertical: '5%'}}>
                <Image source={require("../../assets/Icon/Logo/jeep.png")} />
                <View style={{marginLeft:'5%'}}>
                    <Text style={{fontFamily:'Poppins_700Bold', fontSize:20}}>Select Your</Text>
                    <Text style={{fontFamily:'Poppins_700Bold', fontSize:20}}>Jeepney</Text>

                </View>
            </View>
            <View style={{marginVertical:'5%'}}>
            <FlatList
            data={sampleJeepneyList}
            renderItem={({item})=>(
                <TouchableOpacity>
                <View style={{flexDirection:'row', alignItems:'center', marginHorizontal:'5%', }}>
                    <Image style={{width:50, height:50}} source={item.icon} />
                    <View style={{margin:'5%'}}>
                        <Text style={[styles.title, {fontSize:14}]}>{item.driverName}</Text>
                        <Text style={[styles.title, {fontSize:14}]}>Jeepney {item.jeepNo}</Text>
                        <Text style={styles.subText}>{item.plateNo} - {item.location}</Text>
                        <Text style={styles.subText}>{item.distance} km away, {item.arrivingIn} min arriving</Text>
                    </View>
                </View>
                </TouchableOpacity>
            )}/>
            </View>
        </SafeAreaView>
      )
}

export default FindRide
