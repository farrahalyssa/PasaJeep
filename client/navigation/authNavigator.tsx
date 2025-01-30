import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackParamList } from "./types";
import Intro from "../screens/auth/intro";
import Register from "../screens/auth/register";
import Login from "../screens/auth/login";
import { NavigationContainer } from '@react-navigation/native';

const AuthStack = createStackNavigator<AuthStackParamList>();


const AuthNavigator = () => {
    return(
        <NavigationContainer>
            <AuthStack.Navigator>
                <AuthStack.Screen name="Intro" component={Intro} />
                <AuthStack.Screen name="Register" component={Register} />
                <AuthStack.Screen name="Login" component={Login} />
            </AuthStack.Navigator>
        </NavigationContainer>
    )
}

export default AuthNavigator;
