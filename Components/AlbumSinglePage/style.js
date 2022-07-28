import { StyleSheet, Dimensions } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
    },
    infoBox: {
        alignItems: 'center',
        marginBottom: 20
    },
    cover: {
        width: screenWidth / 1.3,
        height: screenWidth / 1.3,
        marginBottom: 10
    },
    name: {
        fontSize: 25,
        textAlign: 'center'
    },
    artists: {
        fontSize: 19,
        textAlign: 'center',
        marginBottom: 7
    },
    info: {
        fontSize: 19
    },
    trackBox: {
        paddingHorizontal: 15,
        marginBottom: 20
    },
    copyrightBox: {
        paddingHorizontal: 15
    },
    copyright: {
        fontSize: 12
    }
})