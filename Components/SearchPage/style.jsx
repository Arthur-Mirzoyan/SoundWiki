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
        fontSize: 16,
        textAlign: 'center',
        marginTop: 5,
        marginBottom: -5
    },
    button: {
        borderColor: '#505050',
        borderWidth: 1,
        borderRadius: 5,
        margin: 5,
        padding: 10,
        justifyContent: 'center',
        boxSizing: 'border-box',
        maxWidth: '47%'
    },
    option: {
        borderColor: 'gray',
        borderWidth: 1,
        marginHorizontal: 15,
        borderRadius: 50,
        padding: 5,
        paddingHorizontal: 15
    },
    chosen: {
        borderColor: 'green',
        borderWidth: 1,
        marginHorizontal: 15,
        borderRadius: 50,
        padding: 5,
        paddingHorizontal: 15
    },
    result: {
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
});

export default styles;