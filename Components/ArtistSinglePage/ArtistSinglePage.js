import React, { useEffect, useState } from 'react';
import { ImageBackground, View, Text, ScrollView, Pressable } from 'react-native';
import { getSpotifyArtist, getSpotifyArtistTopTracks, getSpotifyArtistRelatedArtists, getSpotifyArtistAlbumResults } from "../../helpers/api";
import { ReadMore } from "./ReadMore/ReadMore";
import { Track } from "./Track/Track";
import { RelatedArtist } from './RelatedArtist/RelatedArtist';
import { Album } from '../Album/Album'
import styles from './style';
import { distinctBy } from "../../helpers/arrayUtils";
import { capitalise } from '../../helpers/textUtils';

export function ArtistSinglePage({ navigation, route }) {
    const id = route.params.id

    const [artist, setArtist] = useState({})
    const [topTracks, setTopTracks] = useState([])
    const [albums, setAlbums] = useState([])
    const [relatedArtists, setRelatedArtists] = useState([])

    useEffect(() => {
        (async () => {
            const artist = (await getSpotifyArtist(id)).data
            const topTracks = (await getSpotifyArtistTopTracks(id)).data.tracks
            const albums = await getSpotifyArtistAlbumResults(id, 5)
            const relatedArtists = (await getSpotifyArtistRelatedArtists(id)).data.artists

            navigation.setOptions({ title: artist.name })

            setArtist(artist)
            setTopTracks(topTracks)
            setAlbums(albums)
            setRelatedArtists(relatedArtists)
        })()
    }, [])

    return (
        <ScrollView>
            <ImageBackground style={styles.avatar} source={artist.images ? { uri: artist.images[0].url } : null}>
                <View style={styles.nameBox}>
                    <Text style={styles.name}>{artist.name}</Text>
                </View>
            </ImageBackground>
            <View style={styles.container}>
                <View>
                    <Text style={styles.genresTitle}>Genres:</Text>
                    <ReadMore
                        numberOfLines={1}
                        textStyle={styles.genresList}
                        readMoreStyle={styles.genresReadMore}>
                        {artist.genres ? capitalise(artist.genres?.join(', ')) : null}
                    </ReadMore>
                </View>
                <View style={styles.topTracksSection} >
                    <Text style={styles.topTracksTitle}>Popular Tracks:</Text>
                    {
                        topTracks?.slice(0, 5)?.map((track, index) =>
                            <Track item={track} index={index} key={track.id} />
                        )
                    }
                </View>

                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 10 }}>Albums:</Text>
                    {
                        distinctBy(albums, item => item.name)?.slice(0, 5)?.map((album, index) =>
                            <Album item={album} index={index} key={album.id} />)
                    }
                    <Pressable style={{ alignItems: 'center' }} onPressIn={() => navigation.push('AlbumList', { artistId: artist.id })}>
                        <Text style={styles.showAll}>Show All Albums</Text>
                    </Pressable>
                </View>

                <View style={styles.releasesSection}>
                    <Text style={styles.releasesTitle}>Related artists:</Text>
                    <ScrollView horizontal={true}>
                        {
                            relatedArtists?.map(artist =>
                                <RelatedArtist navigation={navigation} item={artist} key={artist.id} />
                            )
                        }
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
    )
}