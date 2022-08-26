import { StyleSheet, Dimensions } from "react-native";

const WIDTH = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    modalBox: {
        width: WIDTH,
        height: 'auto',
        backgroundColor: '#98b38d',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        margin: '-10%',
        padding: 20,
        paddingBottom: 25,
        alignItems: 'center'
    },
    modalTitle: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        alignSelf: 'center'
    },
    modalText: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        marginTop: 15
    },
    icon: {
        alignSelf: 'center',
        marginTop: 15
    }
})
