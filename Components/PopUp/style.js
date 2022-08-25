import { StyleSheet, Dimensions } from "react-native";

const WIDTH = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    modalBox: {
        // flexDirection: 'row',
        // display:'flex',
        width: WIDTH,
        height: '25%',
        
        backgroundColor: 'gray',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        margin: '-10%',
        padding: '5%',
        alignItems:'center'
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