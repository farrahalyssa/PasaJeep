import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, Image} from 'react-native';
import { styles } from '../styles'
const HistoryCommuter = () => {
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
       
    </SafeAreaView>
  )
}

export default HistoryCommuter;
