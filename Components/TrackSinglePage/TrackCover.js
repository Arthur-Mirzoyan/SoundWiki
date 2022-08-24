import { StyleSheet, Image, View, Dimensions } from 'react-native'
import React from 'react'

const {width} = Dimensions.get('window').width

export default function TrackCover({Albumcover}) {
  console.log(Albumcover);
  return (
    <View style={{margin:10}}>
      <Image 
      style = {{width, height:300, borderRadius:5}} 
      source ={{uri: Albumcover}} 
      resizeMode={'contain'}/>
    </View>
  )
}

const styles = StyleSheet.create({})