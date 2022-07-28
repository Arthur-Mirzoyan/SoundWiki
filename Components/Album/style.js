import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5,
        marginBottom: 7
    },
    albumImage: {
        width: 100,
        height: 100,
        borderRadius: 7,
        marginRight: 5
    },
    albumNameText: {
        fontSize: 18,
        flex: 1,
        flexWrap: 'wrap',
        padding: 10
    }
});