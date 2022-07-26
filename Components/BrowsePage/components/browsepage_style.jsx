import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    div_img: {
        displayd: 'flex',
        justifyContent: 'flex-end',
        position: 'absolute',
        right: 0,
        bottom: 0
    },
    text: {
        textDecorationLine: 'none',
        textDecorationStyle: "solid",
        textDecorationColor: "#000",
        marginTop: 10,
        color: '#FEFEFE',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    text_view: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    image: {
        borderRadius: 10,
        width: 100,
        height: 100
    },

    main: {
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
})

export default styles