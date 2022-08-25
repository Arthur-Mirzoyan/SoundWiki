import React, { useEffect, useState } from "react";
import { Text, View,Image } from "react-native";
import { Audio } from 'expo-av';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './style';
import Modal from "react-native-modal";
import TextTicker from 'react-native-text-ticker'

export function PopUp({ item, setShowModal, setIsPlaying, showModal, isPlaying }) {
    console.log(item);
    const [on, setOn] = useState('');
    const [sound, setSound] = useState();
   

    function playControl(song) {
        if (on != song) {
            setOn(song);
            playSound(song);
        }
        else {
            setOn('');
            sound.unloadAsync();
        }
    }

    async function playSound(song) {
        const { sound } = await Audio.Sound.createAsync({ uri: song });
        setSound(sound);

        await sound.playAsync();
    }

    useEffect(() => {

        return sound ?
            () => {
                sound.unloadAsync();
            }
            : undefined;
    }, [sound])



    return (
        <Modal
            isVisible={showModal}
            hasBackdrop={true}
            backdropColor='transperant'
            style={styles.modal}
            onModalShow={() => playControl(item.preview_url)}
            onBackdropPress={() => {
                setShowModal(!showModal);
                playControl(item.preview_url);
            }}
            onBackButtonPress={() => {
                setShowModal(!showModal);
                playControl(item.preview_url);
            }}
        >
            <View style={ styles.modalBox}>

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