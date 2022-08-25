import React, { useState } from "react";
import { Image, Pressable, Text, Alert } from "react-native";
import { PopUp } from '../../PopUp/PopUp';
import { styles } from "./style";

export function SearchResult({ navigation, item, itemVariant, image }) {
    const [showModal, setShowModal] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);

    const [navigationPage, navigationId] = {
        Artists: ['ArtistSingle', item.id],
        Tracks: ['AlbumSingle', item.album?.id],
        Albums: ['AlbumSingle', item.id]
    }[itemVariant]

    return (
        <>
            <Pressable
                style={styles.button}
                onPress={() => {
                    if (itemVariant == "Tracks") {
                        if (item.preview_url) {
                            setIsPlaying(true);
                            setShowModal(!showModal);
                        }
                        else {
                            Alert.alert(
                                'We are sorry...',
                                'Track is not available now.',
                                [
                                    {
                                        text: "OK",
                                        onPress: () => { },
                                        style: "cancel",
                                    }
                                ],
                                { cancelable: true }
                            );
                        }
                    }
                    else {
                        navigation.navigate(navigationPage, { id: navigationId })
                    }
                }}
                onLongPress={() => navigation.navigate(navigationPage, { id: navigationId })}
            >
                <Image
                    style={styles.image}
                    source={image ? { uri: image } : null}
                />
                <Text style={ styles.info}>{item.name}</Text>
            </Pressable>

            {
                showModal && (
                    <PopUp item={item} setShowModal={setShowModal} showModal={showModal} setIsPlaying={setIsPlaying} isPlaying={isPlaying} />
                )
            }
        </>
    )
}