import React from 'react'
import { createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from '../screens/Home/HomeScreen'
import SplashScreen from '../screens/splash/SplashScreen'
import LoginScreen from '../screens/Authentication/LoginScreen'
import ClassSessionsScreen from '../screens/ClassSession/ClassSessionsScreen'
import TaskSessionsScreen from '../screens/TaskSession/TaskSessionsScreen'
import TaskSessionScreen from '../screens/TaskSession/TaskSessionScreen'
import WhiteboardScreen from '../screens/TaskSession/Tools/WhiteBoardScreen'
import ChatScreen from '../screens/TaskSession/Tools/ChatScreen'


const TaskSessionStackNavigator = createStackNavigator(
    {
        TaskSessions: {
            screen: TaskSessionsScreen,
            navigationOptions: {
            }
        },
        TaskSession: TaskSessionScreen,
        Whiteboard: WhiteboardScreen,
        Chat: ChatScreen
    }
)

const ClassSessionStackNavigator = createStackNavigator(
    {
        Zajęcia: {
            screen: ClassSessionsScreen,
            navigationOptions: {
                headerLeft: undefined
            }
        },
        Zadania: TaskSessionStackNavigator
    }
)

const BottomMenuNavigator = createBottomTabNavigator(
    {
        Zajęcia: ClassSessionStackNavigator,
        Home: HomeScreen
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