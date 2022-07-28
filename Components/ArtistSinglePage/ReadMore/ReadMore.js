import React, {useCallback, useState} from 'react'
import {Text, View} from "react-native";

export function ReadMore({textStyle, readMoreStyle, numberOfLines, children}) {
    const [textShown, setTextShown] = useState(false)
    const [toggled, setToggled] = useState(false)
    const [lengthMore, setLengthMore] = useState(false)

    function toggleNumberOfLines() {
        setTextShown(!textShown)
        setToggled(true)
    }

    const onTextLayout = useCallback(event => {
        setLengthMore(event.nativeEvent.lines.length > numberOfLines)
    }, []);

    return (
        <View>
            <Text
                onTextLayout={onTextLayout}
                numberOfLines={!textShown  ? undefined : numberOfLines}
                style={textStyle}>
                {children}
            </Text>
            {
                lengthMore || toggled ?
                    <Text
                        onPress={toggleNumberOfLines}
                        style={readMoreStyle}>
                        {textShown ? 'Read less' : 'Read more'}
                    </Text> : null
            }
        </View>
    )
}