import { KeyboardAVoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BrowsePage } from './Components/BrowsePage/BrowsePage';
import { SearchPage } from './Components/SearchPage/SearchPage';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ tabBarHideOnKeyboard: true }}>
          <Tab.Screen name="Browse" component={BrowsePage} />
          <Tab.Screen name="Search" options={headerOptions} component={SearchPage} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const headerOptions = () => ({
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "#101010"
  }
})