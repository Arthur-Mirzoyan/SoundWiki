import React, { useCallback, useState } from 'react'
import { Text, View } from "react-native";

export function ReadMore({ textStyle, readMoreStyle, numberOfLines, children }) {
    const [textShown, setTextShown] = useState(false)
    const [lengthMore, setLengthMore] = useState(false)
    const [isLong, setIsLong] = useState(true)
    const toggleNumberOfLines = () => {
        setTextShown(!textShown)
    }

    const onTextLayout = useCallback(event => {
        setLengthMore(event.nativeEvent.lines.length >= numberOfLines);
        if (event.nativeEvent.lines.length <= 1) setIsLong(false);
        else setIsLong(true);
    }, []);

    return (
        <View>
            <Text
                onTextLayout={onTextLayout}
                numberOfLines={textShown ? undefined : numberOfLines}
                style={textStyle}>{children}
            </Text>
            {
                lengthMore && isLong ? <Text
                    onPress={toggleNumberOfLines}
                    style={readMoreStyle}>{textShown ? 'Read less' : 'Read more'}</Text>
                    : null
            }
        </View>
    )
}