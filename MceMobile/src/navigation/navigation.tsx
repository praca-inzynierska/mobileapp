import React from 'react'
import { createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import HomeScreen from '../screens/Home/HomeScreen'
import SplashScreen from '../screens/splash/SplashScreen'
import LoginScreen from '../screens/Authentication/LoginScreen'
import ClassSessionsScreen from '../screens/ClassSession/ClassSessionsScreen'

const BottomMenuNavigator = createBottomTabNavigator(
    {
        Home: HomeScreen,
        Classess: ClassSessionsScreen,
        // Settings: 
    }
)

const SwitchNavigator = createSwitchNavigator(
    {
        routeSplash: SplashScreen,
        routeLogin: LoginScreen,
        routeHome: BottomMenuNavigator
    },
    {
        defaultNavigationOptions: "routeSplash"
    }
)

//const 

export default SwitchNavigator