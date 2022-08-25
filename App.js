
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BrowseStack } from './Components/Stacks/BrowseStack'
import { SearchStack } from './Components/Stacks/SearchStack';

const Tab = createBottomTabNavigator()
 
export default function App() {
    return (
        <NavigationContainer  >
            <Tab.Navigator screenOptions={screenOptions}>
                <Tab.Screen 
                    name="TabBrowse"
                    component={BrowseStack}
                    options={{
                        headerShown: false,
                        tabBarIcon:  ({focused}) =>  <Ionicons name='home' size={30} color={focused ? 'green' : 'gray'} />}}
                        
                    />
                <Tab.Screen
                    name="TabSearch"
                    component={SearchStack}
                    options={{
                        
                        headerShown: false,
                        tabBarIcon: ({focused}) => <Ionicons name='search' size={30} color={focused ? 'green' : 'gray'} />
                    }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const screenOptions = {
    tabBarHideOnKeyboard: true,
    tabBarShowLabel: false,
    tabBarStyle: [
        {
            "display": "flex"
        },
        null
    ]
}