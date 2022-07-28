import React from 'react';
import { Image, StyleSheet, Text, View } from "react-native";

function Album({ item }) {
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

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5,
        marginBottom: 7
    },
    albumImage: {
        width: 100,
        height: 100,
        marginRight: 5
    },
    albumNameText: {
        fontSize: 18,
        flex: 1,
        flexWrap: 'wrap',
        padding: 10
    }
});

export default Album;