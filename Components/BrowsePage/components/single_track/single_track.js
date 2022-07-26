import  {Text} from 'react-native'

function Single_track({route}) {
    console.log(route);
        return(
            <Text>{route.params.id}</Text>
        )
}

export default Single_track