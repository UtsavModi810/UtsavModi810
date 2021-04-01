import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Home from '../../Screen/Home/Home';
import {Setting} from '../Setting/Setting'


class Bottomtab extends Component {
    render() {
        const Tab = createBottomTabNavigator();
        return (
            <Tab.Navigator
                initialRouteName="Home"
                tabBarOptions={{
                    labelStyle: {fontSize: 15,},
                    activeTintColor: '#e91e63',
                    style:{height:65}
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="home" color={color} size={40} />
                        ),
                    }}
                />

                <Tab.Screen
                    name="Profile"
                    component={Setting}
                    options={{
                        tabBarLabel: 'Setting',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="settings" color={color} size={40} />
                        ),
                    }}
                />

            </Tab.Navigator>
        )
    }
}

export default Bottomtab;
