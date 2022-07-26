import  {Text} from 'react-native'

function Single_artist({route}) {
  console.log(route.params.name);
  console.log(route);
      return(
        <Text>{route.params.id}</Text>
      )
}

export default Single_artist