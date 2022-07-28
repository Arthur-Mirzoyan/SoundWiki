import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BrowsePage} from '../BrowsePage/BrowsePage';
import {GenrePage} from '../GenrePage/GenrePage'
import {ArtistSinglePage} from "../ArtistSinglePage/ArtistSinglePage";

const Stack = createNativeStackNavigator();

export function BrowseStack() {
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen options={{title: 'Browse'}} name="Browse" component={BrowsePage}/>
            <Stack.Screen options={{title: 'Genre'}} name="Genre" component={GenrePage}/>
            <Stack.Screen options={{title: 'Artist'}} name="ArtistSingle" component={ArtistSinglePage}/>
        </Stack.Navigator>
    )
}

const screenOptions = {
    headerBackVisible: true
}