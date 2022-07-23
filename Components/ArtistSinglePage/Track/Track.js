import React from 'react'
import {StyleSheet, Image, Text, View} from "react-native";

export function Track({item, index}) {
    let image = item.album.images[item.album.images.length-2]

    let durationMinutes = Math.round(item.duration_ms / 60000)
    let durationSeconds = Math.round(item.duration_ms / 1000 % 60)
    let formattedTime = `${durationMinutes}:${durationSeconds < 10 ? '0' : ''}${durationSeconds}`

    return (
        <View style={styles.box}>
            <View style={styles.topPositionBox}>
                <Text style={styles.topPositionText}>{index + 1}</Text>
            </View>
            <Image style={styles.albumImage} source={{uri: image.url}} />
            <View style={styles.trackInfoBox}>
                <Text style={styles.trackNameText}>{item.name}</Text>
                <Text style={styles.trackDurationText}>{formattedTime}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginLeft: 3
    },
    topPositionBox: {
        width: '6%'
    },
    topPositionText: {
        fontSize: 22
    },
    albumImage: {
        width: 64,
        height: 64
    },
    trackInfoBox: {
        flexDirection: 'column',
        marginLeft: 7
    },
    trackNameText: {
        fontSize: 20
    },
    trackDurationText: {
        fontSize: 17
    }
})