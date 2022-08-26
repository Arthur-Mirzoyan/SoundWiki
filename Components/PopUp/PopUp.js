import React, { useState } from "react";
import { Text, View } from "react-native";
import { Audio } from 'expo-av';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './style';
import Modal from "react-native-modal";
import TextTicker from 'react-native-text-ticker'

export function PopUp({ item, setShowModal, setIsPlaying, showModal, isPlaying }) {
    const [sound, setSound] = useState();

    async function playSound(song) {
        const { sound } = await Audio.Sound.createAsync({ uri: song });
        setSound(sound);

        await sound.playAsync();
    }

    return (
        <Modal
            isVisible={showModal}
            hasBackdrop={true}
            backdropColor='transperant'
            style={styles.modal}
            onModalShow={() => playSound(item.preview_url)}
            onBackdropPress={() => {
                setShowModal(!showModal);
                sound.unloadAsync();
            }}
            onBackButtonPress={() => {
                setShowModal(!showModal);
                sound.unloadAsync();
            }}
        >
            <View style={styles.modalBox} >

                <TextTicker
                    style={styles.modalTitle}
                    duration={5000}
                    loop
                    bounce
                    repeatSpacer={50}
                    marqueeDelay={1500}
                >{item.name}</TextTicker>

                <AntDesign
                    name={!isPlaying ? 'play' : 'pausecircle'}
                    size={40}
                    color="white"
                    style={styles.icon}
                    onPress={() => {
                        try {
                            if (isPlaying) {
                                sound.pauseAsync();
                            }
                            else {
                                sound.playAsync();
                            }
                            setIsPlaying(!isPlaying);
                        }
                        catch (error) { }
                    }}
                />

                <Text style={styles.modalText}>
                    {item.artists.map(artist => artist.name).join(', ')}
                </Text>
            </View>
        </Modal>
    )
}