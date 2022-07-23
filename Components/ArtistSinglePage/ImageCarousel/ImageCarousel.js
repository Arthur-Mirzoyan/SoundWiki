import React from 'react';
import {Dimensions} from 'react-native'
import Carousel from 'react-native-reanimated-carousel';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

export function ImageCarousel({items}) {
    return (
        <Carousel
            width={screenWidth}
            height={screenHeight / 3.5}
            data={items}
            renderItem={/* TODO */}
        />
    )
}