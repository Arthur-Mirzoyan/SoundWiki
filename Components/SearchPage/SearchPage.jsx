import { Text, View, TextInput, Button } from 'react-native';
import styles from './style';
import { useEffect, useState } from 'react';
import getItemsByName from '../../helpers/api';

export function SearchPage() {

    const [input, setInput] = useState("");
    const [info, setInfo] = useState([]);

    return (
        <>
            <View style={styles.view}>
                <TextInput
                    style={styles.input}
                    placeholderTextColor="white"
                    placeholder="🔍    Artists or songs"
                    onChangeText={(text) => {
                        setInput(text);
                    }}
                >
                </TextInput>
                <Text style={styles.text}>Browse All</Text>
                <Button title="Search" onPress={() => {
                    (async () => {
                        setInput(checkName(input));
                        setInfo(Object.entries((await getItemsByName(input)).data.artists.items[0]));
                    })();
                    for (let i in info) {
                        console.log(info[i][0], ":", info[i][1]);
                    }
                }} />

            </View>
        </>
    );
}

function checkName(name) {
    name = name.trim();
    name = name.replace(' ', '%20');
    return name;
}