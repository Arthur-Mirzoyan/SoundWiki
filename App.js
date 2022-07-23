import React from "react";

import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BrowsePage } from './Components/BrowsePage/BrowsePage';
import { SearchPage } from './Components/SearchPage/SearchPage';
import { ArtistSinglePage } from './Components/ArtistSinglePage/ArtistSinglePage';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Browse" component={BrowsePage} />
          <Tab.Screen name="Search" component={SearchPage} />
          <Tab.Screen name="Single" component={ArtistSinglePage} />
        </Tab.Navigator>
      </NavigationContainer>

      <StatusBar style="auto" />
    </>
  );
}