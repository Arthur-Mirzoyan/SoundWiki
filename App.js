import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BrowsePage } from './Components/BrowsePage/BrowsePage';
import { SearchPage } from './Components/SearchPage/SearchPage';
import { useEffect } from 'react';
import { ArtistSinglePage } from './Components/ArtistSinglePage/ArtistSinglePage';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Browse" component={BrowsePage} />
          <Tab.Screen name="Search" component={SearchPage} />
          <Tab.Screen name="Single" component={ExampleSinglePage} />
        </Tab.Navigator>
      </NavigationContainer>

      <StatusBar style="auto" />
    </>
  );
}

function ExampleSinglePage() {
  return ArtistSinglePage({id: '0k17h0D3J5VfsdmQ1iZtE9'})
}