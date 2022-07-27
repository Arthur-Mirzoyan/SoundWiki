import React from 'react';
import { Image, Text, View } from "react-native";
import styles from './style';

export function Album({ item, index }) {
    console.log(item);
    let image = item.images[1]
    return (
        <>
            <View style={styles.box}>
                <View style={styles.topPositionBox}>
                    <Text style={styles.topPositionText}>{index + 1}</Text>
                </View>
                <Image style={styles.albumImage} source={{ uri: image.url }} />
                <View style={styles.trackInfoBox}>
                    <Text style={styles.trackNameText}>{item.name}</Text>
                </View>
            </View>
        </>
    )
}