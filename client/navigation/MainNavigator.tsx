import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeCommuter from '../screens/commuter/HomeCommuter';
import ProfileCommuter from '../screens/commuter/ProfileCommuter';

const MainTab = createBottomTabNavigator(); 

const MainNavigator = () => {
  return (
    <NavigationContainer >
      <MainTab.Navigator initialRouteName="HomeCommuter">
        <MainTab.Screen name="HomeCommuter" component={HomeCommuter}  />
        <MainTab.Screen name="ProfileCommuter" component={ProfileCommuter}  />

      </MainTab.Navigator>
    </NavigationContainer>

  )
}

export default MainNavigator
