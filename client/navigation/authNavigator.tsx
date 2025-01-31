import React from "react";

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { AuthStackParamList } from "./Types";

import Intro from "../screens/auth/Intro";
import Register from "../screens/auth/Register";
import Login from "../screens/auth/Login";
import RoleSelection from "../screens/auth/RoleSelection";
import DriverRegistration from "../screens/auth/DriverRegistration";

const AuthStack = createStackNavigator<AuthStackParamList>();


const AuthNavigator = () => {
    return(
        <NavigationContainer>
            <AuthStack.Navigator>
                <AuthStack.Screen name="Intro" component={Intro} />
                <AuthStack.Screen name="Register" component={Register} />
                <AuthStack.Screen name="Login" component={Login} />
                <AuthStack.Screen name="DriverRegistration" component={DriverRegistration} />
                <AuthStack.Screen name="RoleSelection" component={RoleSelection} />

            </AuthStack.Navigator>
        </NavigationContainer>
    )
}

export default AuthNavigator;
