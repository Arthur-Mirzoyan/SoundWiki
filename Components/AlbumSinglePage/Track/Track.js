import React, { useState } from "react";
import { Alert, Pressable, Text, View } from "react-native";
import { styles } from "./style";
import { truncateText } from "../../../helpers/textUtils";
import { PopUp } from "../../PopUp/PopUp";

export function Track({ item }) {
    const [showModal, setShowModal] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);

    return (
        <>
            <Pressable
                style={styles.box}
                onPress={() => {
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
                }}
            >
                <View style={styles.positionBox}>
                    <Text style={showModal ? styles.playingPosition : styles.position}>{item.track_number}</Text>
                </View>
                <View style={styles.trackInfoBox}>
                    <Text style={showModal ? styles.playingName : styles.name}>{truncateText(item.name, 27)}</Text>
                    <Text style={showModal ? styles.playingArtists : styles.artists}>{item.artists.map(artist => artist.name).join(', ')}</Text>
                </View>
            </Pressable>

            {
                showModal && (
                    <PopUp item={item} setShowModal={setShowModal} showModal={showModal} setIsPlaying={setIsPlaying} isPlaying={isPlaying} />
                )
            }
        </>
    )
}