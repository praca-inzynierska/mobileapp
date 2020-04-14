import React from 'react'
import { createSwitchNavigator } from 'react-navigation'
import HomeScreen from '../screens/Home/HomeScreen'


const SwitchNavigator = createSwitchNavigator(
    {
        //routeAuthentication:  
        routeHome: HomeScreen
    }
)

export default SwitchNavigator