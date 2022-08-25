import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginLeft: 3
    },
    topPositionBox: {
        width: '7%'
    },
    topPosition: {
        fontSize: 22
    },
    albumImage: {
        width: 64,
        height: 64,
        borderRadius: 5
    },
    trackInfoBox: {
        flexDirection: 'column',
        marginLeft: 7
    },
    trackNameText: {
        fontSize: 20
    },
    playing_trackNameText: {
        color:'green',
        fontSize: 20
    },
    trackDurationText: {
        fontSize: 17
    }
});

export default styles;