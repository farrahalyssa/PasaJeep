import React from "react";

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { AuthStackParamList } from "./Types";

import Intro from "../screens/auth/Intro";
import Register from "../screens/auth/Register";
import Login from "../screens/auth/Login";
import RoleSelection from "../screens/auth/RoleSelection";
import DriverRegistration from "../screens/auth/DriverRegistration";

const Stack = createStackNavigator<AuthStackParamList>();


const AuthNavigator = () => {
    return(
        <NavigationContainer>
        <Stack.Navigator 
                        screenOptions={{
                            headerShown: true,  
                            headerTitle: '',
                            cardStyle: { backgroundColor: 'white' }, 
                        }}
                    >                
                <Stack.Screen name="Intro" component={Intro} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="DriverRegistration" component={DriverRegistration} />
                <Stack.Screen name="RoleSelection" component={RoleSelection} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AuthNavigator;
