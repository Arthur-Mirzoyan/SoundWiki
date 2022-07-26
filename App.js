import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BrowsePage } from './Components/BrowsePage/BrowsePage';
import SearchStack from './Components/Stacks/SearchStack';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ tabBarHideOnKeyboard: true }}>
        <Tab.Screen name="Browse" component={BrowsePage} />
        <Tab.Screen name="Search" options={headerOptions} component={SearchStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const headerOptions = () => ({
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "#101010"
  }
})