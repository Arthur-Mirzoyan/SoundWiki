import React from 'react';
import { Image, Pressable, Text, View } from "react-native";
import styles from './style';

export function Album({ item }) {
    let image = item.images[0]
    return (
        <>
            <View style={styles.box}>
                <Image style={styles.albumImage} source={{ uri: image.url }} />
                <Text style={styles.albumNameText}>{item.name}</Text>
            </View>
        </>
    )
}