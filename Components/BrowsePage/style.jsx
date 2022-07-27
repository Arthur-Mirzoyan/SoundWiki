import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        backgroundColor:'#051622',
        borderTopColor:'#1BA098',
        borderWidth:1 ,
        paddingTop:10,
        paddingBottom:10 
    },
    imageBox: {
        displayd: 'flex',
        justifyContent: 'flex-end',
        position: 'absolute',
        right: 0,
        bottom: 0
    },
    image: {
        borderRadius: 10,
        width: 100,
        height: 100
    },
    nameBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    name: {
        textDecorationLine: 'none',
        textDecorationStyle: "solid",
        textDecorationColor: "#000",
        marginTop: 10,
        color: '#FEFEFE',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})