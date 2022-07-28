import React, {useState, useEffect} from 'react';
import { ScrollView } from 'react-native';
import {getSpotifyArtist, getSpotifyArtistAlbumResults} from '../../helpers/api';
import {Album} from '../Album/Album'
import {distinctBy} from "../../helpers/arrayUtils";

export function AlbumListPage({ navigation, route }) {
    const artistId = route.params.artistId

    const [albums, setAlbums] = useState([])

    useEffect(() => {
        (async () => {
            const artist = (await getSpotifyArtist(artistId)).data
            const albums = await getSpotifyArtistAlbumResults(artistId)

            navigation.setOptions({title: `${artist.name} albums`})

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