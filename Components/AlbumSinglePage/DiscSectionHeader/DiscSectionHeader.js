import React from "react";
import {Text, View} from "react-native";
import { SimpleLineIcons } from '@expo/vector-icons';
import {styles} from "./style";

export function DiscSectionHeader({discNumber}) {
    return (
        <View style={styles.box}>
            <SimpleLineIcons name="disc" size={24} color="black" />
            <Text style={styles.disc}>Disc {discNumber}</Text>
        </View>
    )
}