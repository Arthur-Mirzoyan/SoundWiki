import React from 'react';
import { ScrollView } from 'react-native';
import { Album } from './Album';

export function AlbumSingle({ navigation, route }) {
    const albums = route.params.albums;

    return (
        <ScrollView style={{ marginLeft: 10, marginTop: 10 }}>
            {
                distinctBy(albums, item => item.name) ?.map((album, index) =>
                    <Album item={album} index={index} key={album.id} />
                )
            }
        </ScrollView>
    )
}

function distinctBy(array, predicate) {
    const conditions = []
    const result = []

    for (let item of array) {
        let condition = predicate(item)
        if (!conditions.includes(condition)) {
            conditions.push(condition)
            result.push(item)
        }
    }
    console.log(conditions);

    return result;
}