import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, Pressable, Alert } from 'react-native'
import { PopUp } from '..//PopUp/PopUp';
import { styles } from './style'
import { getSpotifyRecommendations } from '../../helpers/api';
import { truncateText } from '../../helpers/textUtils';

export function GenrePage({ navigation, route }) {
    const [tracks, setTracks] = useState([])
    const genreName = route.params.name

    const [showModal, setShowModal] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);
    const [item, setItem] = useState();

    useEffect(() => {
        (async () => {
            const tracks = (await getSpotifyRecommendations([genreName.toLowerCase()])).data.tracks

            navigation.setOptions({ title: genreName })
            setTracks(tracks)
        })()
    }, [])


    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    {
                        tracks.map(track =>
                        (
                            <View key={track.id} style={styles.songBox}>
                                <Pressable
                                    onLongPress={() => { navigation.push('ArtistSingle', { id: track.artists[0].id }) }}
                                    onPress={() => {
                                        if (track.preview_url) {
                                            setItem(track);
                                            setIsPlaying(true);
                                            setShowModal(!showModal);
                                        }
                                        else {
                                            Alert.alert(
                                                'We are sorry...',
                                                'Track is not available now.',
                                                [
                                                    {
                                                        text: "OK",
                                                        onPress: () => { },
                                                        style: "cancel",
                                                    }
                                                ],
                                                { cancelable: true }
                                            );
                                        }
                                    }}
                                >
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

            {
                showModal && (
                    <PopUp item={item} setShowModal={setShowModal} showModal={showModal} setIsPlaying={setIsPlaying} isPlaying={isPlaying} />
                )
            }
        </>
    )
}