import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BrowsePage} from '../BrowsePage/BrowsePage';
import {ArtistSinglePage} from "../ArtistSinglePage/ArtistSinglePage";
import { AlbumListPage } from '../AlbumListPage/AlbumListPage';
import {GenrePage} from "../GenrePage/GenrePage";
import {AlbumSinglePage} from "../AlbumSinglePage/AlbumSinglePage";
import {TrackSinglePage} from '../TrackSinglePage/TrackSinglePage';
const Stack = createNativeStackNavigator();

export function BrowseStack() {
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen options={{title: 'Browse'}} name="Browse" component={BrowsePage}/>
            <Stack.Screen options={{title: 'Genre'}} name="Genre" component={GenrePage}/>
            <Stack.Screen options={{title: 'Artist'}} name="ArtistSingle" component={ArtistSinglePage}/>
            <Stack.Screen options={{title: 'Albums'}} name="AlbumList" component={AlbumListPage}/>
            <Stack.Screen options={{title: 'Album'}} name="AlbumSingle" component={AlbumSinglePage}/>
            <Stack.Screen options={{title: 'Track'}} name="TrackSingle" component={TrackSinglePage}/>
        </Stack.Navigator>
    )
}

const screenOptions = {
    headerBackVisible: true
}