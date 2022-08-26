import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import {AntDesign} from 'react-native-vector-icons'


export default function Controls({togglePlayPauseBtn,pause}) {



    
  return (
    <View style={styles.container}>
{
    pause ?
    <TouchableOpacity style={styles.PlayPauseBtn} onPress={togglePlayPauseBtn} >
        <AntDesign name ={'playcircleo'} size={50} color={'white '}/>
    </TouchableOpacity>
    :
    <TouchableOpacity style={styles.PlayPauseBtn} onPress={togglePlayPauseBtn}>
        <AntDesign name ={'pausecircleo'} size={50} color={'white '}/>
    </TouchableOpacity>
}
      

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginTop:20
    },
    PlayPauseBtn:{
        width:80,
        height:80,
        backgroundColor:'#fff',
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'#fff',
        borderRadius:100,
        borderWidth:10,
        borderColor:'gray',
        margin:20,
        marginTop:65

    }
})