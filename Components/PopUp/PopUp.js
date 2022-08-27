import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { Audio } from 'expo-av';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './style';
import Modal from "react-native-modal";
import TextTicker from 'react-native-text-ticker'

export function PopUp({ item, setShowModal, setIsPlaying, showModal, isPlaying }) {
    const [sound, setSound] = useState();
    const image = item.album?.images?.[0] ? { uri: item.album?.images?.[0].url } : require('../../assets/icon.png');

    async function playSound(song) {
        const { sound } = await Audio.Sound.createAsync({ uri: song }, { shouldPlay: true }, handleStatusChange);
        setSound(sound);

        await sound.playAsync();
    }

    function handleStatusChange(status) {
        if (status.didJustFinish) {
            setShowModal(false)
            setIsPlaying(false)
        }
    }

    return (
        <Modal
            isVisible={showModal}
            hasBackdrop={true}
            backdropColor='rgba(0, 0, 0, 0.5)'
            style={styles.modal}
            onModalShow={() => playSound(item.preview_url)}
            onBackdropPress={() => {
                try {
                    sound.unloadAsync();
                    setShowModal(!showModal);
                } catch (error) { }
            }}
            onBackButtonPress={() => {
                try {
                    sound.unloadAsync();
                    setShowModal(!showModal);
                } catch (error) { }
            }}
        >
            <View style={styles.modalBox}>

                <View>
                    <Image style={styles.albumImage} source={image} />
                </View>

                <View style={styles.infoBox}>
                    <TextTicker
                        style={styles.modalTitle}
                        duration={5000}
                        loop
                        bounce
                        repeatSpacer={50}
                        marqueeDelay={1500}
                    >{item.name}</TextTicker>

                    <Text style={styles.modalText}>
                        {item.artists.map(artist => artist.name).join(', ')}
                    </Text>
                </View>

                <View style={styles.playButtonBox}>
                    <AntDesign
                        name={!isPlaying ? 'play' : 'pausecircle'}
                        size={40}
                        color="white"
                        style={styles.playButton}
                        onPress={() => {
                            try {
                                if (isPlaying) {
                                    sound.pauseAsync();
                                } else {
                                    sound.playAsync();
                                }
                                setIsPlaying(!isPlaying);
                            } catch (error) {
                            }
                        }}
                    />
                </View>
            </View>
        </Modal>
    )
}