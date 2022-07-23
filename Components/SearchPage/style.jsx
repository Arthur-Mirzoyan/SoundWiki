import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    view: {
        backgroundColor: "#101010",
        flex: 1
    },
    input: {
        margin: 10,
        height: 50,
        fontSize: 20,
        backgroundColor: "#505050",
        borderRadius: 10,
        padding: 5,
        color: "white"
    },
    info: {
        color: "white",
        fontSize: 16
    },
    button: {
        backgroundColor: '#505050',
        borderRadius: 5,
        margin: 5,
        padding: 10
    },
    option: {
        backgroundColor: 'gray',
        marginHorizontal: 15,
        marginRight: -5,
        borderRadius: 50,
        padding: 5,
        paddingHorizontal: 15
    },
    chosen: {
        backgroundColor: 'green',
        marginHorizontal: 15,
        marginRight: -5,
        borderRadius: 50,
        padding: 5,
        paddingHorizontal: 15
    }
});

export default styles;