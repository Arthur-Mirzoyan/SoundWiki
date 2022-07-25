import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  BrowsePage  from './Components/BrowsePage/BrowsePage';
import { SearchPage } from './Components/SearchPage/SearchPage';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Browse" component={BrowsePage} options={{headerShown:false ,tabBarStyle:{backgroundColor:'#051622'},tabBarLabel:()=>{return null},tabBarIcon: ()=>{return <Image source={{ uri:'https://img.icons8.com/ios-filled/50/1ba098/home.png'}}  style={{width: 25, height: 25}}/>}}} />
          <Tab.Screen name="Search" component={SearchPage}  options={{headerTitleAlign:'center',headerTitleStyle:{fontSize:30,fontWeight:'bold',color:'#1BA098'},headerStyle:{backgroundColor:'#051622'},tabBarStyle:{backgroundColor:'#051622'},tabBarLabel:()=>{return null},tabBarIcon: ()=>{return <Image source={{ uri:'https://img.icons8.com/ios-filled/50/1ba098/search--v1.png' }}  style={{width: 27, height: 27,marginBottom:4}}/>}}}/>
        </Tab.Navigator>
      </NavigationContainer>

      <StatusBar style="auto" />
    </>
  );
}
