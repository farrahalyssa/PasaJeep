import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, Image, FlatList} from 'react-native';
import { styles } from '../styles'
const HistoryCommuter = () => {
  const sampleHistory = [
    {jeepNo: '2', day: 'Today', time: '2:30 PM', route:'Northgate to South Station'},
    {jeepNo: '4', day: 'Today', time: '8:00 AM', route:'Northgate to Alabang'},
    {jeepNo: '1', day: 'Yesterday', time: '8:50 PM', route:'Northgate to Alabang'},
    {jeepNo: '2', day: 'November 5, 2024', time: '8:35 AM', route:'Sucat to Alabang'},
    {jeepNo: '3', day: 'November 1, 2024', time: '3:12 PM', route:'Alabang to Sucat'}
  ]

  return (
    <SafeAreaView>
    <View style={{flexDirection: "row", margin:'10%', alignItems: "center" }}>
            <View>
                <Image source={require('../../assets/Icon/Logo/freen.png')} />
            </View>
            <View style={{marginLeft:'5%'}}>
                <Text style={[styles.textBody, {fontFamily:'Poppins_700Bold'}]}>Freen Sarocha</Text> 
                <Text style={styles.textBody}>Commuter</Text>
            </View>

      </View>
      <View>
        <Text style={[styles.title, {marginBottom:'2%'}]}>Ride History</Text>
        <View>
         <FlatList
         data = {sampleHistory}
         renderItem = {
          ({ item }) => (
            <TouchableOpacity>

            <View style={{ flexDirection: 'row', padding: '5%', backgroundColor: '#ebebeb', alignItems: 'center' }}>
                <View>
                  <Text style={styles.subText}>{item.day} at {item.time}</Text>
                  <Text style={[styles.title, { fontSize: 20 }]}>Jeep {item.jeepNo}</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                  <Text style={[styles.textBody]}>{item.route}</Text>
                </View>
            </View>
            </TouchableOpacity>
          )
         }
         keyExtractor={(item, index) =>index.toString()}

         />
        </View>
      </View>
       
    </SafeAreaView>
  )
}

export default HistoryCommuter;
