import React from 'react'
import {StyleSheet, View, Pressable, Image, Text} from 'react-native'
import { truncateText } from '../../../helpers/textUtils';

export function RelatedArtist({navigation, item}) {
    let image = item.images[item.images.length-2]

    return (
        <Pressable onPress={() => navigation.push('ArtistSingle', {id: item.id})}>
            <View style={styles.box}>
                <Image style={styles.image} source={{uri: image.url}} />
                <Text style={styles.name}>{truncateText(item.name, 19)}</Text>
            </View>
        </Pressable>
    )
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