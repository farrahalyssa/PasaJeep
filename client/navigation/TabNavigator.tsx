import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeCommuter from '../screens/commuter/HomeCommuter';
import Profile from '../screens/shared/Profile';

const Tab = createBottomTabNavigator(); 

const TabNavigator = () => {
  return (
    <NavigationContainer >
      <Tab.Navigator initialRouteName="HomeCommuter">
        <Tab.Screen name="HomeCommuter" component={HomeCommuter}  />
        <Tab.Screen name="Profile" component={Profile}  />

      </Tab.Navigator>
    </NavigationContainer>

  )
}

export default TabNavigator
