import React from 'react'
import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native'

const ProfileDriver = () => {
  return (
    <SafeAreaView>
        <View>
            <Text>Eduardo Dela Cruz</Text> 
            <Text>Commuter</Text>
        </View>

        <TouchableOpacity>
            <View>
                <Text>Manage Account</Text>
                <Text>Add and secure your accounts</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View>
                <Text>Update Profile</Text>
                <Text>Update your personal information</Text>
            </View>
        </TouchableOpacity>   
        <TouchableOpacity>
            <View>
                <Text>Switch Role</Text>
                <Text>Driver or a Commuter</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity><Text>About PasaJeep</Text></TouchableOpacity>
        <TouchableOpacity><Text>Log out</Text></TouchableOpacity>


    </SafeAreaView>
  )
}

export default ProfileDriver
