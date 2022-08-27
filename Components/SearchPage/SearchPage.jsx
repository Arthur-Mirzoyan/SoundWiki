import React, { useState } from 'react';
import { Text, View, TextInput, Pressable, ScrollView } from 'react-native';
import getSpotifyItemsByName from '../../helpers/api';
import { styles } from './style';
import { SearchResult } from "./SearchResult/SearchResult";
import { getAt } from '../../helpers/arrayUtils';

const searchResultVariants = ['Artists', 'Tracks', 'Albums']

export function SearchPage({ navigation }) {
    const [artists, setArtists] = useState([])
    const [tracks, setTracks] = useState([])
    const [albums, setAlbums] = useState([])

    const [shownItemVariant, setShownItemVariant] = useState('Artists');
    const [areOptionsShown, setOptionsShown] = useState(false);

    return (
        <>
            <View style={{ paddingBottom: 7}}>
                <TextInput
                    style={styles.input}
                    placeholder=" Search artists or songs "
                    onChangeText={(text) => {
                        handleInputChange(text, setOptionsShown, setArtists, setTracks, setAlbums)
                    }} />
                {
                    areOptionsShown && (
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            {searchResultVariants.map(item =>
                                <Pressable style={shownItemVariant === item ? styles.chosen : styles.option}
                                    onPress={() => setShownItemVariant(item)}
                                    key={item}>
                                    <Text>{item}</Text>
                                </Pressable>
                            )}
                        </View>
                    )
                }
            </View>

            <ScrollView style={styles.view}>
                {
                    areOptionsShown && (
                        <View style={styles.result}>
                            {
                                { Artists: artists, Tracks: tracks, Albums: albums }[shownItemVariant]
                                    .map(item =>
                                        <SearchResult
                                            navigation={navigation}
                                            item={item}
                                            itemVariant={shownItemVariant}
                                            image={item ?.album ?.images ? item.album.images[1].url : getAt(item?.images, 1)?.url}
                                            key={item.id} />
                                    )
                            }
                        </View>
                    )
                }
            </ScrollView>
        </>
    );
}

function handleInputChange(text, setOptionsShown, setArtists, setTracks, setAlbums) {
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

            let albumData = (await getSpotifyItemsByName(text, "album")).data.albums.items;
            setAlbums(albumData)
        })();
    } catch (error) {
    }
}