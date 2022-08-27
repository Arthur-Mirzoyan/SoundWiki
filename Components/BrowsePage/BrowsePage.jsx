import React from 'react';
import { View, Text, Image, Pressable, ScrollView } from 'react-native'
import { styles } from './style'

class Genre {
    constructor(name, imageUrl, color) {
        this.name = name
        this.imageUrl = imageUrl
        this.color = color
    }
}

const genres = [
    new Genre('Pop', 'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe', 'rgb(146, 240, 180)'),
    new Genre('Rock', 'https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730', 'rgb(250, 197, 203)'),
    new Genre('Hip-hop', 'https://i.scdn.co/image/ab67706f000000029bb6af539d072de34548d15c', 'rgb(245, 172, 105)'),
    new Genre('Dance', 'https://i.scdn.co/image/ab67706f000000020377baccf69ede3cf1a26eff', 'rgb(245, 166, 214)'),
    new Genre('Jazz', 'https://i.scdn.co/image/ab67706f00000002d72ef75e14ca6f60ea2364c2', 'rgb(174, 194, 242)'),
    new Genre('K-pop', 'https://i.scdn.co/image/ab67706f00000002978b9f4a4f40b430fd0d837e', 'rgb(171, 245, 164)'),
    new Genre('Classical', 'https://i.scdn.co/image/ab67706f000000023e0130fcd5d106f1402b4707', 'rgb(208, 162, 245)'),
    new Genre('Latino', 'https://t.scdn.co/images/6a48e36b373a4d879a9340076db03a7b', 'rgb(242, 174, 214)')
]

export function BrowsePage({ navigation }) {

    return (
        <ScrollView>
            <View style={styles.container}>
                {genres.map(genre => (
                    <Pressable key={genre.name} onPress={() => {
                        navigation.push('Genre', { name: genre.name })
                    }}>
                        <View style={{
                            margin: 10,
                            borderRadius: 10,
                            width: 157,
                            height: 167,
                            padding: 'auto',
                            backgroundColor: genre.color
                        }}>
                            <View style={styles.nameBox}>
                                <Text style={styles.name}>{genre.name}</Text>
                            </View>
                            <View style={styles.imageBox}>
                                <Image style={styles.image} source={{ uri: genre.imageUrl }} />
                            </View>
                        </View>
                    </Pressable>
                )
                )}
            </View>
        </ScrollView>
    )
}