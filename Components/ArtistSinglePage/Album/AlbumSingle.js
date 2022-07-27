import React from 'react';
import { ScrollView } from 'react-native';
import { Album } from './Album';

export function AlbumSingle({ navigation, route }) {
    const albums = route.params.albums;

    return (
        <ScrollView style={{ marginLeft: 10, marginTop: 10 }}>
            {
                albums?.map((album, index) =>
                    <Album item={album} index={index} key={album.id} />
                )
            }
        </ScrollView>
    )
}