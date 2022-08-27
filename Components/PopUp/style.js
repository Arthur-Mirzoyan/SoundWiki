import { StyleSheet, Dimensions } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

export const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    modalBox: {
        width: screenWidth,
        height: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#98b38d',
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        margin: '-10%',
        padding: 20,
        paddingHorizontal: 30,
        paddingBottom: 25,
        alignItems: 'center'
    },
    albumImage: {
        width: 48,
        height: 48,
        borderRadius: 10
    },
  
    infoBox: {
        justifyContent: 'center',
        paddingHorizontal: 10,
        maxWidth: screenWidth / 1.9
    },
    modalTitle: {
        color: 'white',
        fontSize: 15
    },
    modalText: {
        color: 'white',
        fontSize: 12,
    },
    playButtonBox: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})
