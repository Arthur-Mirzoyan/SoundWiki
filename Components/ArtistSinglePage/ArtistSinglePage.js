import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, ImageBackground, View, Text, ScrollView } from 'react-native';
import { getSpotifyArtist, getSpotifyArtistTopTracks, getSpotifyArtistRelatedArtists, getSpotifyArtistAlbums } from "../../helpers/api";
import { ReadMore } from "./ReadMore/ReadMore";
import { Track } from "./Track/Track";
import { RelatedArtist } from './RelatedArtist/RelatedArtist';
import { Album } from './Album/Album';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

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
            const albums = (await getSpotifyArtistAlbums(id)).data.items
            const relatedArtists = (await getSpotifyArtistRelatedArtists(id)).data.artists

            navigation.setOptions({ title: artist.name })

            setArtist(artist)
            setTopTracks(topTracks)
            setAlbums(albums);
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
                        {artist.genres ?.join(', ')}
                    </ReadMore>
                </View>
                <View style={styles.topTracksSection} >
                    <Text style={styles.topTracksTitle}>Popular Tracks:</Text>
                    {
                        topTracks ?.slice(0, 5) ?.map((track, index) =>
                            <Track item={track} index={index} key={track.id} />
                        )
                    }
                </View>

                <View>
                    <Text>Albums</Text>
                    {
                        albums ?.slice(0, 5) ?.map((album, index) =>
                            <Album item={album} index={index} key={album.id} />)
                    }
                </View>

                <View style={styles.releasesSection}>
                    <Text style={styles.releasesTitle}>Related artists:</Text>
                    <ScrollView horizontal={true}>
                        {
                            relatedArtists ?.map(artist =>
                                <RelatedArtist navigation={navigation} item={artist} key={artist.id} />
                            )
                        }
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    avatar: {
        width: screenWidth,
        height: screenHeight / 3.5
    },
    nameBox: {
        position: 'absolute',
        justifyContent: 'flex-end',
        top: 0, left: 0, right: 0, bottom: 0,
        paddingLeft: 10,
        paddingBottom: 5
    },
    name: {
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold'
    },
    container: {
        marginTop: 15,
        paddingHorizontal: 10
    },
    genresTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 5
    },
    genresList: {
        fontSize: 20
    },
    genresReadMore: {
        color: 'blue',
        fontSize: 17,
        marginTop: 3
    },
    topTracksSection: {
        marginTop: 20,
    },
    topTracksTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10
    },
    releasesSection: {
        marginTop: 20,
    },
    releasesTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10
    }
})