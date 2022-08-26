import { useState, useEffect} from "react"
import {View, StyleSheet,Alert } from "react-native"
import TrackCover from "./TrackCover"
import TrackDetails from "./TrackDetails"
import Controls from "./Controls"
import { Audio } from 'expo-av'

export function TrackSinglePage({route,navigation}) {

    
    const [sound, setSound] = useState();
    const currentTrack = route.params.id
    const [pause, setPause] = useState(true)
    const url = currentTrack.preview_url
    console.log(currentTrack);

    useEffect(() => {
        (async () => {
            navigation.setOptions({ title:currentTrack.name })
          
        })()
    }, [])

    async function playSound() {
       

      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync( 
         

        { uri: url },
         { shouldPlay: true }
      );
      setSound(sound);
        
      console.log('Playing Sound');
      await sound.playAsync(); }
  
    useEffect(() => {
      return sound
        ? () => {
            console.log('Unloading Sound');
            sound.unloadAsync(); }
        : undefined;
    }, [sound]);
    

  function stop() {
    console.log("stopped");
    sound.unloadAsync()
  }

  const createTwoButtonAlert = () =>
  Alert.alert(
    "Sorry, but you can't hear this track.",
    "Go back and enjoy others.",
    [
    
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );

    function togglePlayPauseBtn() {
        
        if (pause==true && currentTrack.preview_url!== null) {
            setPause(!pause)
            playSound()
        }else if (pause==false && currentTrack.preview_url!== null){
            setPause(!pause)
            stop()
        }else if (currentTrack.preview_url == null){
            createTwoButtonAlert()
        }
        
       
    }

 

    return (
        <View style={styles.container}>
          <TrackCover Albumcover = {currentTrack.album ? currentTrack.album.images[1].url : "https://us.123rf.com/450wm/koblizeek/koblizeek1902/koblizeek190200055/125337077-no-image-vector-symbol-missing-available-icon-no-gallery-for-this-moment-.jpg?ver=6"}/> 


            <TrackDetails navigation={navigation} ArtistId={currentTrack.artists[0].id} TrackName={currentTrack.name} ArtistName ={currentTrack.artists[0].name}/>
            <Controls   {...{togglePlayPauseBtn}} {...{pause}}/>
    

        </View>
       
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        
    }
})