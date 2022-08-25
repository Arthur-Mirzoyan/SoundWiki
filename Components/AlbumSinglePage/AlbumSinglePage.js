import React from "react";
import { Image, Pressable, ScrollView, SectionList, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { styles } from "./style";
import { Track } from "./Track/Track";
import { getSpotifyAlbumAndResults } from "../../helpers/api";
import { DiscSectionHeader } from "./DiscSectionHeader/DiscSectionHeader";
import { getAt } from '../../helpers/arrayUtils';

export function AlbumSinglePage({ navigation, route }) {
    const id = route.params.id

    const [album, setAlbum] = useState({})
    const [tracks, setTracks] = useState(null)
    const [year, setYear] = useState(0)

    useEffect(() => {
        (async () => {
            const [album, tracks] = await getSpotifyAlbumAndResults(id)

            navigation.setOptions({ title: album.name })

            setYear(album.release_date.slice(0, 4))
            setAlbum(album)

            setTracks(tracks)
        })()
    }, [])


    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.infoBox}>
                    <Image style={styles.cover} source={album.images ? { uri: album.images[0].url } : null} />
                    <Text style={styles.name}>{album.name}</Text>
                    <Pressable onPress={() =>
                        navigation.push('ArtistSingle', getAt(album?.artists, 0)?.id ? { id: album.artists[0].id } : undefined)
                    }>
                        <Text style={styles.artists}>{album?.artists?.map(artist => artist.name)?.join(', ')}</Text>
                    </Pressable>
                    <Text style={styles.info}>{year} · {album.total_tracks} tracks</Text>
                </View>
                <View style={styles.trackBox}>
                    {tracks ? constructSectionList(tracks) : null}
                </View>
                <View style={styles.copyrightBox}>
                    <Text style={styles.copyright}>{album.copyrights ? album.copyrights[0].text : null}</Text>
                </View>
            </View>
        </ScrollView>
    )
}

function constructSectionList(tracks) {
    if (tracks[tracks.length - 1].disc_number === 1) {
        return <View style={{ marginTop: 20 }}>
            {
                tracks.map(track =>
                    <Track item={track} key={track.id} />
                )
            }
        </View>
    }

    const result = []

    let lastDiscNumber = 0
    for (let track of tracks) {
        if (track.disc_number !== lastDiscNumber) {
            lastDiscNumber = track.disc_number
            result.push(<DiscSectionHeader discNumber={track.disc_number} key={`Disc ${track.disc_number}`} />)
        }
        result.push(<Track item={track} key={track.id} />)
    }

    return result
}