import React from 'react';
import uuid from 'react-native-uuid';
import { Text, View, TextInput, Pressable, ScrollView, Image } from 'react-native';
import { useState } from 'react';
import getSpotifyItemsByName from '../../helpers/api';
import styles from './style';

export function SearchPage({ navigation }) {
    const NOT_FOUND = "https://teelindy.com/wp-content/uploads/2019/03/default_image.png";

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
            <View style={{ backgroundColor: '#101010', paddingBottom: 7 }}>
                <TextInput
                    style={styles.input}
                    placeholderTextColor="white"
                    placeholder=" Search artists or songs "
                    onChangeText={(text) => {
                        setArtists([]);
                        setArtistsId([]);
                        setArtistsImg([]);

                        setTracks([]);
                        setTracksId([]);
                        setTracksImg([]);

                        if (text !== " " && text !== "") {
                            setOptionsShown(true);
                            try {
                                (async () => {
                                    let artistData = (await getSpotifyItemsByName(text, "artist")).data.artists.items;
                                    for (let i in artistData) {
                                        let info = artistData[i];

                                        setArtists(artists => [...artists, info.name]);
                                        setArtistsId(artistsId => [...artistsId, info.id]);
                                        try {
                                            let img = info.images[1].url;
                                            setArtistsImg(artistsImg => [...artistsImg, img]);
                                        }
                                        catch (error) {
                                            setArtistsImg(artistsImg => [...artistsImg, NOT_FOUND]);
                                        }

                                    }

                                    let trackData = (await getSpotifyItemsByName(text, "track")).data.tracks.items;
                                    for (let i in trackData) {
                                        let info = trackData[i];

                                        setTracks(tracks => [...tracks, info.name]);
                                        setTracksId(tracksId => [...tracksId, info.id]);
                                        try {
                                            let img = info.album.images[1].url;
                                            setTracksImg(tracksImg => [...tracksImg, img]);
                                        }
                                        catch (error) {
                                            setTracksImg(tracksImg => [...tracksImg, NOT_FOUND]);
                                        }
                                    }
                                })();
                            }
                            catch (error) {
                                return
                            }
                        }
                        else setOptionsShown(false);
                    }}
                >
                </TextInput>

                {
                    optionsShown && (
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Pressable style={isShown ? styles.chosen : styles.option} onPress={() => setIsShown(true)}>
                                <Text style={{ color: 'white' }}>Artists</Text>
                            </Pressable>
                            <Pressable style={!isShown ? styles.chosen : styles.option} onPress={() => setIsShown(false)}>
                                <Text style={{ color: 'white' }}>Tracks</Text>
                            </Pressable>
                        </View>
                    )
                }

            </View>

            <ScrollView style={styles.view}>
                {
                    optionsShown && (
                        <View style={styles.result}>
                            {
                                isShown ?
                                    artists.map((name, index) => (
                                        <Pressable key={uuid.v4()} style={styles.button} onPress={() => navigation.navigate('ArtistSingle', { id: artistsId[index] })}>
                                            <View style={{ justifyContent: 'center' }}>
                                                <Image style={{ width: 160, height: 160 }} source={{ uri: artistsImg[index] }} />
                                                <Text style={styles.info}>{name}</Text>
                                            </View>
                                        </Pressable>
                                    )) :
                                    tracks.map((name, index) => (
                                        <Pressable key={uuid.v4()} style={styles.button}>
                                            <Image style={{ width: 160, height: 160 }} source={{ uri: tracksImg[index] }} />
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