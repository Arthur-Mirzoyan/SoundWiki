import React, {useCallback, useState} from 'react'
import {Text, View} from "react-native";

export function ReadMore({textStyle, readMoreStyle, numberOfLines, children}) {
    const [textNotShown, setTextShown] = useState(false)
    const [toggled, setToggled] = useState(false)
    const [lengthMore, setLengthMore] = useState(false)

    function toggleNumberOfLines() {
        setTextShown(!textNotShown)
        setToggled(true)
    }

    const onTextLayout = useCallback(event => {
        setLengthMore(event.nativeEvent.lines.length > numberOfLines)
    }, []);

    return (
        <View>
            <Text
                onTextLayout={onTextLayout}
                numberOfLines={!textNotShown  ? undefined : numberOfLines}
                style={textStyle}>
                {children}
            </Text>
            {
                lengthMore || toggled ?
                    <Text
                        onPress={toggleNumberOfLines}
                        style={readMoreStyle}>
                        {textNotShown ? 'Read more' : 'Read less'}
                    </Text> : null
            }
        </View>
    )
}