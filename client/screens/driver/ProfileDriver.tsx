import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const ProfileDriver = () => {
  return (
    <View>
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


    </View>
  )
}

export default ProfileDriver
