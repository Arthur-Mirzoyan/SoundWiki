import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        paddingBottom: 20,
        borderTopColor: '#ffffff',
        borderBottomColor: '#ffffff',
        borderWidth: 1
    },
    songBox: {
        width: 165,
        height: 210,
        paddingHorizontal: 2,
        marginBottom: 50
    },
    name: {
        color: "black",
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5
    },
    playing_name: {
        color: "green",
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5
    },
    artist: {
        color: "black",
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    playing_artist: {
        color: "green",
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    image: {
        alignSelf: 'center',
        width: 150,
        height: 155,
        margin: 10,
        borderRadius: 5
    },
    header: {
        height: 20,
        backgroundColor: "blue"
    }
})