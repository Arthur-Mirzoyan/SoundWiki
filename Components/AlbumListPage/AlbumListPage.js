import React, {useState, useEffect} from 'react';
import { ScrollView } from 'react-native';
import { getSpotifyArtistAlbumResults } from '../../helpers/api';
import {Album} from '../Album/Album'
import {distinctBy} from "../../helpers/arrayUtils";

export function AlbumListPage({ navigation, route }) {
    const artistId = route.params.artistId

    const [albums, setAlbums] = useState([])

    useEffect(() => {
        (async () => {
            const albums = await getSpotifyArtistAlbumResults(artistId)

            navigation.setOptions({title: `${albums[0].artists[0].name} albums`})

            setAlbums(albums)
        })()
    }, [])

    return (
        <ScrollView style={{ marginLeft: 10, marginTop: 10 }}>
            {
                distinctBy(albums, item => item.name)?.map((album, index) =>
                    <Album navigation={navigation} item={album} key={album.id} />
                )
            }
        </ScrollView>
    )
}