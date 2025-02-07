import React from 'react'
import { Text, Image, View, SafeAreaView, FlatList } from 'react-native'
import { styles } from '../styles'

const NearbyRides = () => {
    const sampleJeepneyList = [
        {jeepNo:'1', plateNo: 'PYZ 331', location: 'Festival Mall'},
        {jeepNo:'2', plateNo: 'NPI 079', location: 'Northgate, Alabang'},
        {jeepNo:'3', plateNo: 'TUP 338681', location: 'Sucat'}

    ]
  return (
    <SafeAreaView>
        <View style={{flexDirection:'row', marginHorizontal: '10%', alignItems:'center', marginTop: '5%'}}>
                <Image source={require("../../assets/Icon/Logo/jeep.png")} />
            <View style={{marginLeft:'5%'}}>
                <Text style={{fontFamily:'Poppins_700Bold', fontSize:20}}>Jeepney</Text>
                <Text style={{fontFamily:'Poppins_700Bold', fontSize:20}}>Location & Status</Text>
            </View>
        </View>
        <Image style={{marginTop: '13%', marginBottom: '2%'}} source={require('../../assets/fakeMap.png')}/>


        <FlatList
        data = {sampleJeepneyList}
        renderItem={({item})=>(
            <View style={{padding:'2%'}}>
                <Text style={[styles.title, {fontSize:14}]}>Jeepney {item.jeepNo}</Text>
                <Text style={styles.subText}>{item.plateNo} - {item.location}</Text>
            </View>
        )
    }
        keyExtractor={(item, index)=>index.toString()}
        />
    </SafeAreaView>
  )
}

export default NearbyRides
