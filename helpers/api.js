import axios from 'axios';

async function getToken() {
    try {
        return await axios('https://accounts.spotify.com/api/token', {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + (
                    new Buffer('911cd286aff047ec9f775031b107ece2' + ':' + '0313f472c40c4bd79b55e89e95002f25').toString('base64')
                )
            },
            data: 'grant_type=client_credentials'
        })
    } catch (error) {
        return
    }
}
async function getArtistById(id) {
    let token = await getToken();

    return await axios(`https://api.spotify.com/v1/artists/${id}`, {
        'method': 'GET',
        'headers': {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token.data.access_token
        }
    }
    )
}

export default async function getItemsByName(name) {
    name = (name.trim()).replace(' ', '%20');
    let token = await getToken();

    return await axios(`https://api.spotify.com/v1/search?q=${name}&type=track%2Cartist`, {
        'method': 'GET',
        'headers': {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token.data.access_token
        }
    }
    )
}