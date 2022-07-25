import React, { useEffect, useState } from 'react';
import {ActivityIndicator, View, Text, Image, StyleSheet, ScrollView,Pressable } from 'react-native'
import { Buffer } from 'buffer'
import axios from 'axios';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Single_artist from '../single_artist/single_artist';
import Single_track from '../single_track/single_track';

const Stack = createNativeStackNavigator()




const Genre =    ({route})=> {

//Setting styles
    const styles = StyleSheet.create({

        loading1: {
            flex: 1,
            justifyContent: "center"
        },
        loading2: {
            flexDirection: "row",
            justifyContent: "space-around",
            padding: 10
        },


        div_genre: {

            width: 165,
            height: 210,
            marginBottom: 40
        },

        text_genre: {
            
            marginBottom: 2,
            padding: 5,
            color: "#BAFF39",
            fontSize: 15,
            fontWeight: 'bold',
            textAlign: 'center'

        },
        p_genre: {

            padding: 5,
            color: "#DEB992",
            fontSize: 13,
            fontWeight: 'bold',
            textAlign: 'center'

        },
        main_genre: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center'
        },
        image_genre: {
            alignSelf: 'center',

            width: 150,
            height: 155,
            margin: 10
        },
        header:{
            height:20,
            backgroundColor:"blue"
        }

    })


    function TruncateText(selector, maxLength) {    //Function for making text shorter  
        if (selector.length > maxLength) {
            selector = selector.substr(0, maxLength) + '...';
        }
        return selector;
    }


    //Setting all arrays and states
    let track = []
    const [tracks, setTracks] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [artistName,setArtistName] = useState('')
    const [trackName,setTrackName] = useState('')


    useEffect(() => {

        axios('https://accounts.spotify.com/api/token', {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + (
                    new Buffer('911cd286aff047ec9f775031b107ece2' + ':' + '0313f472c40c4bd79b55e89e95002f25').toString('base64')
                )
            },
            data: 'grant_type=client_credentials'
        }).then(tokenresponse => {

            console.log(tokenresponse.data.access_token); // token.data.access_token is our token
           


            // Api call for retrieving data

            axios(`https://api.spotify.com/v1/recommendations?market=ES&&seed_genres=${route.params.name}`, {
                'method': 'GET',
                'headers': {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + tokenresponse.data.access_token
                }
            }).then(artistresponse => {
                artistresponse.data.tracks.map((elem) => {

                    track.push(elem)

                })

                setTracks(track)
                setIsLoading(false)
            }).catch(error => console.log(error))

        }).catch(error => console.log(error));
    }, [])


    if (isLoading) {        //If for loading animation
        return (
            <View style={[styles.loading1, styles.loading2]}>
                <ActivityIndicator size="large"/>
            </View>
               )
    }



   
const _screen = ({navigation})=>{
        return(
        <View style={{backgroundColor:'#051622',paddingBottom:20,borderTopColor:'#1BA098',borderWidth:1}}>
            <ScrollView>
                <View  style={styles.main_genre}>
                    {       tracks.map((elem) => {
                        return (  
                            <View key={elem.id}  style={styles.div_genre}>

                                <Pressable onPress={()=>{
                                    navigation.navigate("single_track",{id:elem.id})
                                    setTrackName(elem.name)
                                    }}> 
                                <Image style={styles.image_genre} source={{ uri: elem.album.images[0].url }} />
                                <Text style={styles.text_genre}>{TruncateText(elem.name,15)}</Text>
                                </Pressable>

                                <Pressable onPress={()=>{
                                    navigation.navigate("single_artist",{id:elem.artists[0].id})
                                    setArtistName(elem.artists[0].name)
                                    }}>
                                <Text style={styles.p_genre}>{elem.artists[0].name}</Text>
                                </Pressable>

                            </View>
            
                        )
                        })
                    }
                </View>
            </ScrollView>
        </View>
 )}

    return (   
                <Stack.Navigator >
                    <Stack.Screen  name='Recomandation' component={_screen} options={{headerShown:false  }} />
                    <Stack.Screen    name = 'single_artist' component={ Single_artist} options={{ title:TruncateText(artistName,23) ,headerTitleStyle:{fontSize:23,fontWeight:'bold'},headerTitleAlign:'center',animation:"slide_from_bottom" , headerBackImageSource:{uri:"https://img.icons8.com/ios-glyphs/90/000000/delete-sign.png", height:40,width:40} }}/> 
                    <Stack.Screen    name = 'single_track' component={ Single_track} options={{ title:TruncateText(trackName,23) ,headerTitleStyle:{fontSize:23,fontWeight:'bold'},headerTitleAlign:'center',animation:"slide_from_bottom" , headerBackImageSource:{uri:"https://img.icons8.com/ios-glyphs/90/000000/delete-sign.png", height:40,width:40} }}/> 
                </Stack.Navigator>   
            )

}

 export default Genre