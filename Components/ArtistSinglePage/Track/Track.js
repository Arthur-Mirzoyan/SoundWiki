import React, { useState } from 'react'
import { Image, Pressable, Text, View, Alert } from "react-native";
import { PopUp } from '../../PopUp/PopUp';
import { truncateText } from '../../../helpers/textUtils';
import styles from './style';

export function Track({ item, index }) {
    const [showModal, setShowModal] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);

    let image = item.album.images[item.album.images.length - 2]
    let durationMinutes = Math.round(item.duration_ms / 60000)
    let durationSeconds = Math.round(item.duration_ms / 1000 % 60)
    let formattedTime = `${durationMinutes}:${durationSeconds < 10 ? '0' : ''}${durationSeconds}`

    return (
        <>
            <Pressable
                style={styles.box}
                onPress={() => {
                    if (item.preview_url) {
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
                <View style={styles.topPositionBox}>
                    <Text style={showModal ? styles.playing_topPosition : styles.topPosition}>{index}</Text>
                </View>
                <Image style={styles.albumImage} source={{ uri: image.url }} />
                <View style={styles.trackInfoBox}>
                    <Text style={showModal ? styles.playing_trackNameText : styles.trackNameText}>{truncateText(item.name, 30)}</Text>
                    <Text style={showModal ? styles.playing_trackDurationText : styles.trackDurationText}>{formattedTime}</Text>
                </View>
            </Pressable>

            {
                showModal && (
                    <PopUp item={item} setShowModal={setShowModal} showModal={showModal} setIsPlaying={setIsPlaying} isPlaying={isPlaying} />
                )
            }
        </>
    )
}