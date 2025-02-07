import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, Image} from 'react-native';
import { styles } from '../styles'
const Profile = () => {
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
        <View style={{margin:'10%'}}>
        <TouchableOpacity style={{paddingHorizontal:'5%', paddingTop:'4%', flexDirection:'row', alignItems:'center'}}>
            <Image style={{marginRight: '4%'}} source={require('../../assets/Icon/UiIcon/manageAccount.png')} />    
            <View>
                <Text style={styles.textBody}>Manage Account</Text>
                <Text style={styles.subText}>Add and secure your accounts</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={{paddingHorizontal:'5%', paddingTop:'4%', flexDirection:'row', alignItems:'center'}}>
            <Image style={{marginRight: '4%'}} source={require('../../assets/Icon/UiIcon/profile.png')} />              <View>
                <Text style={styles.textBody}>Update Profile</Text>
                <Text style={styles.subText}>Update your personal information</Text>
            </View>
        </TouchableOpacity>   
        <TouchableOpacity style={{paddingHorizontal:'5%', paddingTop:'4%', flexDirection:'row', alignItems:'center'}}>
            <Image style={{marginRight: '4%'}} source={require('../../assets/Icon/UiIcon/switchRole.png')} />              <View>
                <Text style={styles.textBody}>Switch Role</Text>
                <Text style={styles.subText}>Driver or a Commuter</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={{paddingHorizontal:'5%', paddingTop:'4%', flexDirection:'row', alignItems:'center'}}>
            <Image style={{marginRight: '4%'}} source={require('../../assets/Icon/UiIcon/about.png')} />              <Text style={styles.textBody}>About PasaJeep</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{paddingHorizontal:'5%', paddingTop:'4%', flexDirection:'row', alignItems:'center'}}>
            <Image style={{marginRight: '4%'}} source={require('../../assets/Icon/UiIcon/logout.png')} />              <Text style={[styles.textBody, {color:'red'}]}>Log out</Text>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default Profile;
