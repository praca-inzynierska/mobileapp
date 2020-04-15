import React from 'react'
import { createSwitchNavigator } from 'react-navigation'
import HomeScreen from '../screens/Home/HomeScreen'
import SplashScreen from '../screens/splash/SplashScreen'
import LoginScreen from '../screens/Authentication/LoginScreen'


const SwitchNavigator = createSwitchNavigator(
    {
        routeSplash: SplashScreen,
        routeLogin: LoginScreen,
        routeHome: HomeScreen
    },
    {
        defaultNavigationOptions: "routeSplash"
    }
)

export default SwitchNavigator