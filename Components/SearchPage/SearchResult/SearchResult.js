import React from "react";
import {Image, Pressable, Text} from "react-native";
import {styles} from "./style";

export function SearchResult({navigation, item, itemVariant, image}) {
    const [navigationPage, navigationId] = {
        Artists: ['ArtistSingle', item.id],
        Tracks: ['AlbumSingle', item.album?.id],
        Albums: ['AlbumSingle', item.id]
    }[itemVariant]

    return (
        <Pressable style={styles.button} onPress={() => navigation.navigate(navigationPage, {id: navigationId})}>
            <Image
                style={styles.image}
                source={image ? {uri: image} : null}
            />
            <Text style={styles.info}>{item.name}</Text>
        </Pressable>
    )
}