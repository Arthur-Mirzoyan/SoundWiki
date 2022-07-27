import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ArtistSinglePage} from '../ArtistSinglePage/ArtistSinglePage';
import { SearchPage } from '../SearchPage/SearchPage';

const Stack = createNativeStackNavigator();

export function SearchStack() {
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen options={{title: 'Search'}} name="Search" component={SearchPage}/>
            <Stack.Screen options={{title: 'Artist'}} name="ArtistSingle" component={ArtistSinglePage}/>
        </Stack.Navigator>
    )
}

const screenOptions = {
    headerBackVisible: true
}