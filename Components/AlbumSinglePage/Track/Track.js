import React from "react";
import {Pressable, Text, View} from "react-native";
import {styles} from "./style";
import {truncateText} from "../../../helpers/textUtils";

export function Track({item}) {
    return (
        <Pressable>
            <View style={styles.box}>
                <View style={styles.positionBox}>
                    <Text style={styles.position}>{item.track_number}</Text>
                </View>
                <View style={styles.trackInfoBox}>
                    <Text style={styles.name}>{truncateText(item.name, 27)}</Text>
                    <Text style={styles.artists}>{item.artists.map(artist => artist.name).join(', ')}</Text>
                </View>
            </View>
        </Pressable>
    )
}