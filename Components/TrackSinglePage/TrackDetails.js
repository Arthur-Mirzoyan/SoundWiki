import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function TrackDetails({TrackName,ArtistName,navigation,ArtistId}) {
  return (
    <View style={{justifyContent:'center'}}>
      <Text style={styles.name}>{TrackName}</Text>
       <Pressable onPress={()=>{navigation.push('ArtistSingle',{id: ArtistId})}}> 
      <Text style={styles.name}>{ArtistName}</Text>
       </Pressable> 
    </View>
  )
}

const styles = StyleSheet.create({
    name:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:20,
        color:"black"
    }
})