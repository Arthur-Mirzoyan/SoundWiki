import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, Pressable,Alert } from 'react-native'
import { styles } from './style'
import { getSpotifyRecommendations } from '../../helpers/api';
import { truncateText } from '../../helpers/textUtils';
import { PopUp } from '../PopUp/PopUp';
import Track from './Track';


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
        <>
        <ScrollView>
            <View style={styles.container}>
                {
                    tracks.map(track =>
                    (
                       <Track key={track.id} track ={track} navigation={navigation} />
                    ))
                }
            </View>
        </ScrollView>


</>
    )
}