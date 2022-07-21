import React, {useEffect, useState} from 'react';
import { Platform, Dimensions, StyleSheet, Image } from 'react-native';
import {ImageCarousel} from './ImageCarousel/ImageCarousel'
import PropTypes from 'prop-types';

const { width: screenWidth } = Dimensions.get('window')

export function ArtistSinglePage({id}) {
    const [images, setImages] = useState([])

    useEffect(() => {
        (async () => {
            const artist = await getArtistById(id)

            setImages(artist.url)
        })()
    }, [])

    return (
        <ImageCarousel items={images} />
    )
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