import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, ImageBackground, View, Text, FlatList} from 'react-native';
import {getSpotifyArtist} from "../../helpers/api";
import {ReadMore} from "./ReadMore/ReadMore";

const {width: screenWidth, height: screenHeight} = Dimensions.get('window')

export function ArtistSinglePage() {
    const id = '776Uo845nYHJpNaStv1Ds4' // 0k17h0D3J5VfsdmQ1iZtE9, 776Uo845nYHJpNaStv1Ds4

    const [artist, setArtist] = useState({})

    useEffect(() => {
        (async () => {
            const artist = (await getSpotifyArtist(id)).data

            setArtist(artist)
        })()
    }, [])

    return (
        <>
            <ImageBackground style={styles.avatar} source={artist.images ? {uri: artist.images[0].url} : null }>
                <View style={styles.nameBox}>
                    <Text style={styles.name} >{artist.name}</Text>
                </View>
            </ImageBackground>
            <View style={styles.container} >
                <View>
                    <Text style={styles.genresTitle}>Genres: </Text>
                    <ReadMore
                        numberOfLines={1}
                        textStyle={styles.genres}
                        readMoreStyle={styles.genresReadMore}>
                        {artist.genres?.join(', ')}
                    </ReadMore>
                </View>
            </View>
        </>
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
        fontWeight: 'bold'
    },
    genres: {
        fontSize: 20
    },
    genresReadMore: {
        color: 'blue',
        fontSize: 17,
        marginTop: 3
    }
})