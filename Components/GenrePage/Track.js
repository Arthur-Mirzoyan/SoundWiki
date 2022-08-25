import { StyleSheet, Text, View,Pressable,Alert,Image } from 'react-native'
import React from 'react'
import { truncateText } from '../../helpers/textUtils';
import {styles} from './style'
import { PopUp } from '../PopUp/PopUp';
import { useState } from 'react';

export default function Track({navigation, track}) {
    const [ item,setItem] = useState()
    const [showModal, setShowModal] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);


  return (
    <>
    <View key={track.id} style={styles.songBox}>
<Pressable onPress={() => {
    if (track.preview_url) {
        setIsPlaying(true);
        setShowModal(!showModal);
        setItem(track)
   
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
}}>
    <Image style={styles.image} source={{ uri: track.album.images[0].url }} />
    <Text numberOfLines={2} style={ showModal ? styles.playing_name: styles.name}>{track.name}</Text>
</Pressable>

<Pressable onPress={() => {
    navigation.push('ArtistSingle', { id: track.artists[0].id })
}}>
    <Text style={showModal? styles.playing_artist: styles.artist}>{truncateText(track.artists[0].name, 17)}</Text>
</Pressable>
</View>

{  
    showModal && (
        <PopUp item={item} setShowModal={setShowModal} showModal={showModal} setIsPlaying={setIsPlaying} isPlaying={isPlaying} />
    )
}
</>
  )
}




