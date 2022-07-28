import React, {useState, useEffect} from 'react';
import { ScrollView } from 'react-native';
import { getSpotifyArtistAlbumResults } from '../../helpers/api';
import Album from '../Album/Album'

export function AlbumListPage({ navigation, route }) {
    const artistId = route.params.id

    const [albums, setAlbums] = useState([])

    useEffect(() => {
        (async () => {
            const albums = await getSpotifyArtistAlbumResults(artistId)
            console.log(albums)

            setAlbums(albums)
        })()
    }, [])

    return (
        <ScrollView style={{ marginLeft: 10, marginTop: 10 }}>
            {
                distinctBy(albums, item => item.name)?.map((album, index) =>
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