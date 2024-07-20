import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Project from '../Screens/Project';
import Add from '../Screens/Add';
import Chat from '../Screens/Chat';
import Profile from '../Screens/Profile';
import Today_Task from '../Screens/Today_Task';

const Bottom_Tab = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false, tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'black',
            tabBarActiveBackgroundColor: 'black',
            tabBarInactiveBackgroundColor: 'white'
        }}>
            <Tab.Screen name="Home" options={{
                tabBarLabel:'',
          tabBarIcon: ({ color }) => {
                    
                    return <AntDesign color={color} name='home' size={30} />
                }
            }} component={Home} />
            <Tab.Screen name="Project" options={{
                tabBarLabel:'',

                tabBarIcon: ({ color }) => {
                    return <Feather color={color} name='folder' size={30} />
                }
            }} component={Project} />
            <Tab.Screen name="Add" options={{
                tabBarLabel:'',

                tabBarIcon: ({ color }) => {
                    return <AntDesign color={color} name='pluscircleo' size={30} />
                }
            }} component={Add} />
            <Tab.Screen name="Chat" options={{
                tabBarLabel:'',

                tabBarIcon: ({ color }) => {
                    return <Fontisto
                    color={color} name='hipchat' size={30} />
                }
            }} component={Chat} />
            <Tab.Screen name="Profile"  options={{
                tabBarLabel:'',
                tabBarIcon: ({ color }) => {
                    return <AntDesign
                    color={color} name='user' size={30} />
                }
            }} component={Profile} />

        </Tab.Navigator>

    )
}

export default Bottom_Tab

const styles = StyleSheet.create({})