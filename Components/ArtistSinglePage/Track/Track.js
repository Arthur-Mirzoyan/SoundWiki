import React from 'react'
import { Image, Text, View } from "react-native";
import styles from './style';

export function Track({ item, index }) {
    let image = item.album.images[item.album.images.length - 2]

    let durationMinutes = Math.round(item.duration_ms / 60000)
    let durationSeconds = Math.round(item.duration_ms / 1000 % 60)
    let formattedTime = `${durationMinutes}:${durationSeconds < 10 ? '0' : ''}${durationSeconds}`

    return (
        <View style={styles.box}>
            <View style={styles.topPositionBox}>
                <Text style={styles.topPosition}>{index}</Text>
            </View>
            <Image style={styles.albumImage} source={{ uri: image.url }} />
            <View style={styles.trackInfoBox}>
                <Text style={styles.trackNameText}>{item.name}</Text>
                <Text style={styles.trackDurationText}>{formattedTime}</Text>
            </View>
        </View>
    )
}