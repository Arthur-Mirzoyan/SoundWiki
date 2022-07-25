import { Text, View, TextInput, Pressable, ScrollView, Image } from 'react-native';
import styles from './style';
import { useState } from 'react';
import getItemsByName from '../../helpers/api';
import React from 'react';

export function SearchPage() {

    const [artists, setArtists] = useState([]);
    const [artistsId, setArtistsId] = useState([]);
    const [artistsImg, setArtistsImg] = useState([]);
    const [tracks, setTracks] = useState([]);
    const [tracksId, setTracksId] = useState([]);
    const [tracksImg, setTracksImg] = useState([]);
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
                                let artistData = ((await getItemsByName(text, "artist")).data.artists.items);
                                for (let i in artistData) {
                                    let info = artistData[i];
                                    let artist = info.name;
                                    let Id = info.id;
                                    let img = info.images[2].url;
                                    setArtists(artists => [...artists, artist]);
                                    setArtistsId(artistsId => [...artistsId, Id]);
                                    setArtistsImg(artistsImg => [...artistsImg, img]);
                                }

                                let trackData = ((await getItemsByName(text, "track")).data.tracks.items);
                                for (let i in trackData) {
                                    let info = trackData[i];
                                    let track = info.name;
                                    let Id = info.id;
                                    let img = info.album.images[2].url;
                                    setTracks(tracks => [...tracks, track]);
                                    setTracksId(tracksId => [...tracksId, Id]);
                                    setTracksImg(tracksImg => [...tracksImg, img]);
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
                <View>
                    {
                        isShown ?
                            artists.map((name, index) => (
                                <Pressable key={name + artistsId[index]} style={styles.button}>
                                    <Image style={{ width: 32, height: 32 }} source={{ uri: artistsImg[index] }} />
                                    <Text style={styles.info}>{name}</Text>
                                </Pressable>
                            )) :
                            tracks.map((name, index) => (
                                <Pressable key={name + tracksId[index]} style={styles.button}>
                                    <Image style={{ width: 32, height: 32 }} source={{ uri: tracksImg[index] }} />
                                    <Text style={styles.info}>{name}</Text>
                                </Pressable>
                            ))
                    }
                </View>
            </ScrollView>
        </>
    );
}