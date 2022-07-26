import React from 'react'
import {StyleSheet, View, Pressable, Image, Text} from 'react-native'

export function RelatedArtist({item}) {
    let image = item.images[item.images.length-2]

    return (
        <Pressable>
            <View style={styles.box}>
                <Image style={styles.image} source={{uri: image.url}} />
                <Text style={styles.name}>{truncate(item.name, 19)}</Text>
            </View>
        </Pressable>
    )
}

function truncate(text, symbolCount) {
    if (text.length <= symbolCount) {
        return text
    }

    return text.substring(0, symbolCount-3)+'...'
}

const styles = StyleSheet.create({
    box: {
        marginRight: 10
    },
    image: {
        width: 192,
        height: 192
    },
    name: {
        fontSize: 20
    }
})