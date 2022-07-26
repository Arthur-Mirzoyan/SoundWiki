import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SearchPage } from '../SearchPage/SearchPage';
import { ArtistSinglePage } from '../ArtistSinglePage/ArtistSinglePage';

const Stack = createNativeStackNavigator();

const SearchStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="SearchPage"
                component={SearchPage}
            />
            <Stack.Screen name="ArtistSingle" component={ArtistSinglePage} />
        </Stack.Navigator>
    );
};
export default SearchStack;