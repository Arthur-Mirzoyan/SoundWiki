import React from 'react';
import uuid from 'react-native-uuid';
import { Text, View, TextInput, Pressable, ScrollView, Image } from 'react-native';
import { useState } from 'react';
import getSpotifyItemsByName from '../../helpers/api';
import styles from './style';

export function SearchPage({ navigation }) {
    const [artists, setArtists] = useState([])
    const [tracks, setTracks] = useState([])

    const [areArtistsShown, setArtistsShown] = useState(true);
    const [areOptionsShown, setOptionsShown] = useState(false);

    return (
        <>
            <View style={{ backgroundColor: '#101010', paddingBottom: 7 }}>
                <TextInput
                    style={styles.input}
                    placeholderTextColor="white"
                    placeholder=" Search artists or songs "
                    onChangeText={(text) => {
                        handleInputChange(text, setOptionsShown, setArtists, setTracks)
                    }}
                >
                </TextInput>

                {
                    areOptionsShown && (
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Pressable style={areArtistsShown ? styles.chosen : styles.option} onPress={() => setArtistsShown(true)}>
                                <Text style={{ color: 'white' }}>Artists</Text>
                            </Pressable>
                            <Pressable style={!areArtistsShown ? styles.chosen : styles.option} onPress={() => setArtistsShown(false)}>
                                <Text style={{ color: 'white' }}>Tracks</Text>
                            </Pressable>
                        </View>
                    )
                }
            </View>

            <ScrollView style={styles.view}>
                {
                    areOptionsShown && (
                        <View style={styles.result}>
                            {
                                areArtistsShown ?
                                    artists.map((artist) => (
                                        <Pressable key={uuid.v4()} style={styles.button} onPress={() => { navigation.navigate('ArtistSingle', { id: artist.id }) }}>
                                            <View style={{ justifyContent: 'center' }}>
                                                <Image
                                                    style={{ width: 160, height: 160 }}
                                                    source={artist.images ? { uri: artist.images[artist.images.length-2]?.url } : null}
                                                />
                                                <Text style={styles.info}>{artist.name}</Text>
                                            </View>
                                        </Pressable>
                                    )) :
                                    tracks.map((track) => (
                                        <Pressable key={uuid.v4()} style={styles.button}>
                                            <Image
                                                style={{ width: 160, height: 160 }}
                                                source={track.album.images ? { uri: track.album.images[track.album.images.length-2]?.url } : null}
                                            />
                                            <Text style={styles.info}>{track.name}</Text>
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


function handleInputChange(text, setOptionsShown, setArtists, setTracks) {
    if (text === '') {
        setOptionsShown(false)
        return
    }
    
    setOptionsShown(true);
    try {
        (async () => {
            let artistData = (await getSpotifyItemsByName(text, "artist")).data.artists.items;
            setArtists(artistData)

            let trackData = (await getSpotifyItemsByName(text, "track")).data.tracks.items;
            setTracks(trackData)
        })()
    }
    catch (error) {}
}