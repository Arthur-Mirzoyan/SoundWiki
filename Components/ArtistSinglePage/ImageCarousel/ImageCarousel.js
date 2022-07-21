import React, {useEffect, useState} from 'react';
import {Dimensions,  StyleSheet} from 'react-native'
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window')

export function ImageCarousel({items}) {
    return (
        <Carousel
            sliderWidth={screenWidth}
            sliderHeight={screenWidth}
            itemWidth={screenWidth - 60}
            data={items}
            renderItem={ImageCarouselItem}
            hasParallaxImages={true}
        />
    )
}

function ImageCarouselItem({item, index}, parallaxProps) {
    return (
        <ParallaxImage
            source={{ uri: item.url }}
            containerStyle={styles.imageContainer}
            style={styles.image}
            parallaxFactor={0.4}
            {...parallaxProps}
        />
    );
}

const styles = StyleSheet.create({
    item: {
      width: screenWidth - 60,
      height: screenWidth - 60,
    },
    imageContainer: {
      flex: 1,
      marginBottom: Platform.select({ ios: 0, android: 1 }),
      backgroundColor: 'white',
      borderRadius: 8,
    },
    image: {
      ...StyleSheet.absoluteFillObject,
      resizeMode: 'cover',
    },
})