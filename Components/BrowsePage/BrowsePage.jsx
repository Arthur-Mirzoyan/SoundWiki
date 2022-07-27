import React from 'react';
import {View, Text, Image, Pressable, ScrollView} from 'react-native'
import {styles} from './style'

class Genre {
    constructor(name, imageUrl, color) {
        this.name = name
        this.imageUrl = imageUrl
        this.color = color
    }
}

const genres = [
    new Genre('Pop', 'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe', 'rgb(30, 215, 96)'),
    new Genre('Rock', 'https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730', 'rgb(230, 30, 50)'),
    new Genre('Hip-hop', 'https://i.scdn.co/image/ab67706f000000029bb6af539d072de34548d15c', 'rgb(186, 93, 7)'),
    new Genre('Dance', 'https://i.scdn.co/image/ab67706f000000020377baccf69ede3cf1a26eff', 'rgb(220, 20, 140)'),
    new Genre('Jazz', 'https://i.scdn.co/image/ab67706f00000002d72ef75e14ca6f60ea2364c2', 'rgb(30, 50, 100)'),
    new Genre('K-pop', 'https://i.scdn.co/image/ab67706f00000002978b9f4a4f40b430fd0d837e', 'rgb(20, 138, 8)'),
    new Genre('Classical', 'https://i.scdn.co/image/ab67706f000000023e0130fcd5d106f1402b4707', 'rgb(141, 103, 171)'),
    new Genre('Latino', 'https://t.scdn.co/images/6a48e36b373a4d879a9340076db03a7b', 'rgb(225, 17, 139)')
]


export function BrowsePage({navigation}) {
    return (
        <ScrollView>
            <View style={styles.container}>
                {genres.map(genre => (
                        <Pressable key={genre.name} onPress={() => {
                            navigation.push('Genre', {name: genre.name})
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
                                    <Image style={styles.image} source={{uri: genre.imageUrl}}/>
                                </View>
                            </View>
                        </Pressable>
                    )
                )}
            </View>
        </ScrollView>
    )
}
