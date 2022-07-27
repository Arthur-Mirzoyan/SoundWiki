import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({

    loading1: {
        flex: 1,
        justifyContent: "center",
        backgroundColor:'#051622'
    },
    loading2: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    },


    div_genre: {

        width: 165,
        height: 210,
        marginBottom: 40
    },

    text_genre: {
        
        marginBottom: 2,
        padding: 5,
        color: "#BAFF39",
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'

    },
    p_genre: {

        padding: 5,
        color: "#DEB992",
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: 'center'

    },
    main_genre: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    image_genre: {
        alignSelf: 'center',

        width: 150,
        height: 155,
        margin: 10
    },
    header:{
        height:20,
        backgroundColor:"blue"
    }

})

export default styles