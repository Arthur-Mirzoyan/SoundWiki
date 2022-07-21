import { Text, View, TextInput } from 'react-native';
import styles from './style';
import { useEffect, useState } from 'react';

export function SearchPage() {

    const [input, setInput] = useState("")

    return (
        <>
            <View style={styles.view}>
                <TextInput
                    style={styles.input}
                    placeholderTextColor="white"
                    placeholder="🔍    Artists or songs"
                    value={input}
                    onChangeText={(text) => {
                        setInput(text);
                    }}
                    >
                </TextInput>
                <Text style={styles.text}>Browse All</Text>
            </View>
        </>
    );
}