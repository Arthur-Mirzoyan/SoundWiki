import React, { useState} from 'react';
import {View,Text,Image,Pressable} from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Genre from './components/genre/genre_page';
import styles from './components/browsepage_style'
import { ScrollView } from 'react-native';

const Stack = createNativeStackNavigator()
let names_uri = ['pop','rock','hip-hop','dance','jazz','k-pop','classical','latino']
let names = ['Pop','Rock','Hip-hop','Dance','Jazz','K-pop','Classical','Latino']
let images = ['https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe','https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730','https://i.scdn.co/image/ab67706f000000029bb6af539d072de34548d15c','https://i.scdn.co/image/ab67706f000000020377baccf69ede3cf1a26eff','https://i.scdn.co/image/ab67706f00000002d72ef75e14ca6f60ea2364c2','https://i.scdn.co/image/ab67706f00000002978b9f4a4f40b430fd0d837e','https://i.scdn.co/image/ab67706f000000023e0130fcd5d106f1402b4707','https://t.scdn.co/images/6a48e36b373a4d879a9340076db03a7b']
let colors = ['#1ed760','rgb(230, 30, 50)','rgb(186, 93, 7)','rgb(220, 20, 140)','rgb(30, 50, 100)','rgb(20, 138, 8)','rgb(141, 103, 171)','rgb(225, 17, 139)']

function BrowsePage() { 
  
   
const [gen,setGen] = useState('')

  const MainScreen = ({navigation}) => {
         return (

        
<ScrollView >

<View  style={styles.main}>

{names_uri.map((elem)=>{
  return(


<Pressable key={elem} onPress={()=>{
   navigation.navigate('genre',{name:elem})
   setGen(names[names_uri.indexOf(elem)])

}}>

    <View  style = {{    
      margin: 10,
      borderRadius: 10,
      width: 157,
      height: 167,
      padding: 'auto',
      backgroundColor: `${colors[names_uri.indexOf(elem)]}`}} >

        <View style={styles.text_view}>
            <Text  style = {styles.text}>{names[names_uri.indexOf(elem)]}</Text>
        </View>

        <View style={styles.div_img}>
            <Image style={styles.image} source={{uri:`${images[names_uri.indexOf(elem)]}`}} />
        </View>
    </View>
</Pressable>

  )
})}
</View>
</ScrollView>


        )
    }



    return(
      <NavigationContainer independent={true}> 
        <Stack.Navigator >
          <Stack.Screen name='Home'component={MainScreen} options={{headerStyle:{ backgroundColor:'#051622'}, headerTitleAlign:'center',headerTitleStyle:{fontSize:30,fontWeight:'bold',color:'#1BA098'},headerTintColor:'white'}}/>
          <Stack.Screen name='genre' component={Genre} options={{headerStyle:{ backgroundColor:'#051622'},title:gen,headerTitleStyle:{fontSize:29,fontWeight:'bold',color:'#1BA098'},headerTitleAlign:'center', headerTintColor: 'white' }}/>
        </Stack.Navigator> 
      </NavigationContainer> 
    )
 }
          
export default BrowsePage
