import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BrowsePage } from './Components/BrowsePage/BrowsePage';
import { SearchPage } from './Components/SearchPage/SearchPage';
import { useEffect } from 'react';

const Tab = createBottomTabNavigator();

export default function App() {

  useEffect(() => document.title("SoundWiki"));

  return (
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Browse" component={BrowsePage} />
          <Tab.Screen name="Search" component={SearchPage} />
        </Tab.Navigator>
      </NavigationContainer>

      <StatusBar style="auto" />
    </>
  );
}