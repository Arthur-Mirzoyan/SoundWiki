import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BrowseStack} from './Components/Stacks/BrowseStack'
import {SearchStack} from './Components/Stacks/SearchStack';

const Tab = createBottomTabNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{tabBarHideOnKeyboard: true}}>
                <Tab.Screen name="Browse" options={{headerShown: false}} component={BrowseStack}/>
                <Tab.Screen name="Search" options={{headerShown: false}} component={SearchStack}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
