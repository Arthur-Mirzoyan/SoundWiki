import React from 'react';
import {Image, Pressable, Text, View} from "react-native";
import {styles} from "./style";

export function Album({ navigation, item }) {
    let image = item.images[0]
    return (
        <Pressable onPress={() => navigation.push('AlbumSingle', { id: item.id })}>
            <View style={styles.box}>
                <Image style={styles.albumImage} source={{ uri: image.url }} />
                <Text style={styles.albumNameText}>{item.name}</Text>
            </View>
        </Pressable>
    )
}