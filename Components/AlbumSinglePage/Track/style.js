import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    box: {
        marginBottom: 20,
        flexDirection: 'row',
        paddingRight: 50
    },
    name: {
        fontSize: 23
    },
    artists: {
        fontSize: 17
    },
    position: {
        fontSize: 20,
        textAlign: 'center'
    },
    playingName: {
        fontSize: 23,
        color: 'green'
    },
    playingArtists: {
        fontSize: 17,
        color: 'green'
    },
    playingPosition: {
        fontSize: 20,
        textAlign: 'center',
        color: 'green'
    },
    positionBox: {
        width: '8%',
        justifyContent: 'center',
        marginRight: 10
    },
    trackInfoBox: {
        width: '100%'
    }
    
})