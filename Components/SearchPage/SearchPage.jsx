import { Text, View, TextInput, Pressable, ScrollView } from 'react-native';
import styles from './style';
import { useState } from 'react';
import getItemsByName from '../../helpers/api';
import React from 'react';

export function SearchPage() {

    const [artists, setArtists] = useState([]);
    const [artistsId, setArtistsId] = useState([]);
    const [tracks, setTracks] = useState([]);
    const [tracksId, setTracksId] = useState([]);
    const [isShown, setIsShown] = useState(true);
    const [optionsShown, setOptionsShown] = useState(false);

    return (
        <>
            <ScrollView style={styles.view}>
                <TextInput
                    style={styles.input}
                    placeholderTextColor="white"
                    placeholder=" Search artists or songs "
                    onChangeText={(text) => {
                        setArtists([]);
                        setArtistsId([]);
                        setTracks([]);
                        setTracksId([]);

                        if (text !== " " && text !== "") {
                            setOptionsShown(true);
                            (async () => {
                                let artistData = Object.entries((await getItemsByName(text, "artist")).data.artists.items);
                                for (let i in artistData) {
                                    let artist = Object.entries(artistData[i][1])[6][1];
                                    let id = Object.entries(artistData[i][1])[4][1];
                                    setArtists(artists => [...artists, artist]);
                                    setArtistsId(artistsId => [...artistsId, id]);
                                }

                                let trackData = Object.entries((await getItemsByName(text, "track")).data.tracks.items);
                                for (let i in trackData) {
                                    let track = Object.entries(trackData[i][1])[11][1];
                                    let id = Object.entries(trackData[i][1])[9][1];
                                    setTracks(tracks => [...tracks, track]);
                                    setTracksId(tracksId => [...tracksId, id]);
                                }
                            })();
                        }
                        else setOptionsShown(false);
                    }}
                >
                </TextInput>

                {
                    optionsShown && (
                        <View style={{ flexDirection: 'row' }}>
                            <Pressable style={isShown ? styles.chosen : styles.option} onPress={() => setIsShown(true)}>
                                <Text>Artists</Text>
                            </Pressable>
                            <Pressable style={!isShown ? styles.chosen : styles.option} onPress={() => setIsShown(false)}>
                                <Text>Tracks</Text>
                            </Pressable>
                        </View>
                    )
                }
                {
                    isShown ? (
                        <View>
                            {
                                artists.map((name, index) => (
                                    <Pressable key={artistsId[index]} style={styles.button}>
                                        <Text style={styles.info}>{name}</Text>
                                    </Pressable>
                                ))
                            }
                        </View>
                    ) : (
                        <View>
                            {
                                tracks.map((name, index) => (
                                    <Pressable key={tracksId[index]} style={styles.button}>
                                        <Text style={styles.info}>{name}</Text>
                                    </Pressable>
                                ))
                            }
                        </View>
                    )
                }
            </ScrollView>
        </>
    );
}