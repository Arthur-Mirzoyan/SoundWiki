import { StyleSheet, Dimensions } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const styles = StyleSheet.create({
    avatar: {
        width: screenWidth,
        height: screenHeight / 3.5
    },
    nameBox: {
        position: 'absolute',
        justifyContent: 'flex-end',
        top: 0, left: 0, right: 0, bottom: 0,
        paddingLeft: 10,
        paddingBottom: 5
    },
    name: {
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold'
    },
    container: {
        marginTop: 15,
        paddingHorizontal: 10
    },
    genresTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 5
    },
    genresList: {
        fontSize: 20
    },
    genresReadMore: {
        color: '#98b38d',
        fontSize: 17,
        marginTop: 3
    },
    topTracksSection: {
        marginTop: 20,
    },
    topTracksTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10
    },
    releasesSection: {
        marginTop: 25,
        paddingBottom: 10
    },
    releasesTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10
    },
    showAll: {
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize: (screenHeight + screenWidth) / 70,
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 10,
        width: screenWidth / 2.5,
    }
});

export default styles;