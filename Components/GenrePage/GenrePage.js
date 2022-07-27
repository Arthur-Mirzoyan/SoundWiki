import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, Pressable } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles } from './style'
import { getSpotifyRecommendations } from '../../helpers/api';
import { truncateText } from '../../helpers/textUtils';

export function GenrePage({ navigation, route }) {
    const [tracks, setTracks] = useState([])

    useEffect(() => {
        (async () => {
            const tracks = (await getSpotifyRecommendations([route.params.name])).data.tracks

            setTracks(tracks)
        })()
    }, [])


    return (
        <View style={{ backgroundColor: '#051622', paddingBottom: 20, borderTopColor: '#1BA098', borderWidth: 1 }}>
            <ScrollView >
                <View style={styles.main_genre}>
                    {tracks.map((track) => {
                        return (
                            <View key={track.id} style={styles.div_genre}>
                                <Pressable onPress={() => {

                                }}>
                                    <Image style={styles.image_genre} source={{ uri: track.album.images[0].url }} />
                                    <Text style={styles.text_genre}>{truncateText(elem.name, 15)}</Text>
                                </Pressable>

                                <Pressable onPress={() => {
                                    navigate.push('ArtistSingle', { id: track.artists[0].id })
                                }}>
                                    <Text style={styles.p_genre}>{elem.artists[0].name}</Text>
                                </Pressable>

                            </View>

                        )
                    })
                    }
                </View>
            </ScrollView>
        </View>
    )
}