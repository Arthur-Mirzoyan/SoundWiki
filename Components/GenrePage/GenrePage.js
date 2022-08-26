import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, Pressable } from 'react-native'
import { styles } from './style'
import { getSpotifyRecommendations } from '../../helpers/api';
import { truncateText } from '../../helpers/textUtils';

export function GenrePage({ navigation, route }) {
    const [tracks, setTracks] = useState([])

    const genreName = route.params.name

    useEffect(() => {
        (async () => {
            const tracks = (await getSpotifyRecommendations([genreName.toLowerCase()])).data.tracks

            navigation.setOptions({ title: genreName })
            setTracks(tracks)
        })()
    }, [])


    return (
        <ScrollView>
            <View style={styles.container}>
                {
                    tracks.map(track =>
                    (
                        <View key={track.id} style={styles.songBox}>
                            {console.log(track)}
                            <Pressable onPress={() => {
                                console.log(track.id);
                              
                                     navigation.push('TrackSingle', { id: track })
                                
                               
                            }}>
                                <Image style={styles.image} source={{ uri: track.album.images[0].url }} />
                                <Text numberOfLines={2} style={styles.name}>{track.name}</Text>
                            </Pressable>

                            <Pressable onPress={() => {
                                navigation.push('ArtistSingle', { id: track.artists[0].id })
                            }}>
                                <Text style={styles.artist}>{truncateText(track.artists[0].name, 17)}</Text>
                            </Pressable>
                        </View>
                    ))
                }
            </View>
        </ScrollView>
    )
}