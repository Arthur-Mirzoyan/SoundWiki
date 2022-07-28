import React from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BrowseStack } from './Components/Stacks/BrowseStack'
import { SearchStack } from './Components/Stacks/SearchStack';

const Tab = createBottomTabNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ tabBarHideOnKeyboard: true }} tabBarOptions={{ showLabel: false }}>
                <Tab.Screen
                    name="TabBrowse"
                    component={BrowseStack}
                    options={{
                        headerShown: false,
                        tabBarIcon: () => <Ionicons name='home' size={30} color='gray' />
                    }} />
                <Tab.Screen
                    name="TabSearch"
                    component={SearchStack}
                    options={{
                        headerShown: false,
                        tabBarIcon: () => <Ionicons name='search' size={30} color='gray' />
                    }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}