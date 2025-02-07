import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeCommuter from '../screens/commuter/HomeCommuter';
import Profile from '../screens/main/Profile';

const MainTab = createBottomTabNavigator(); 

const MainNavigator = () => {
  return (
    <NavigationContainer >
      <MainTab.Navigator initialRouteName="HomeCommuter">
        <MainTab.Screen name="HomeCommuter" component={HomeCommuter}  />
        <MainTab.Screen name="Profile" component={Profile}  />

      </MainTab.Navigator>
    </NavigationContainer>

  )
}

export default MainNavigator
