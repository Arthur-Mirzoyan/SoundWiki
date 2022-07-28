import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    input: {
        margin: 10,
        height: 50,
        fontSize: 20,
        backgroundColor: "#ccc",
        borderRadius: 10,
        padding: 15,
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
        justifyContent: 'center',
        alignItems: 'flex-start'
    }
});