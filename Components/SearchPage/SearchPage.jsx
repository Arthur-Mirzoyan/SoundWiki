import { Text, View, TextInput, Pressable } from 'react-native';
import styles from './style';
import { useState } from 'react';
import getItemsByName from '../../helpers/api';

export function SearchPage() {

    const [info, setInfo] = useState([]);
    const [names, setNames] = useState([]);

    return (
        <>
            <View style={styles.view}>
                <TextInput
                    style={styles.input}
                    placeholderTextColor="white"
                    placeholder="🔍    Artists or songs"
                    onChangeText={(text) => {
                        setNames([]);
                        if (text !== " " && text !== "") {
                            console.clear();
                            console.log(text);
                            (async () => {
                                setInfo(Object.entries((await getItemsByName(text)).data.artists.items));
                                for (let i in info) {
                                    console.log(Object.entries(info[i][1])[4]); // id
                                    console.log((Object.entries(info[i][1]))[6][1]); // name
                                    setNames(names => [...names, (Object.entries(info[i][1]))[6][1]])
                                    console.log("\n");
                                }
                            })();
                        }
                    }}
                >
                </TextInput>
                <Text style={styles.text}>Browse All</Text>

                <View>
                    {
                        names.map((name, index) => (
                            <Pressable style={styles.button}>
                                <Text style={styles.info} key={index}>{name}</Text>
                            </Pressable>
                        ))
                    }
                </View>

            </View>
        </>
    );
}