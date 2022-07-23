import axios from 'axios'

async function getSpotifyToken() {
    try {
        return await axios('https://accounts.spotify.com/api/token', {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic OTExY2QyODZhZmYwNDdlYzlmNzc1MDMxYjEwN2VjZTI6MDMxM2Y0NzJjNDBjNGJkNzliNTVlODllOTUwMDJmMjU='
            },
            data: 'grant_type=client_credentials'
        })
    } catch (error) {
        return null
    }
}

export async function getSpotifyArtist(id) {
    const token = await getSpotifyToken()

    return axios(`https://api.spotify.com/v1/artists/${id}`, {
        'method': 'GET',
            'headers': {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token.data.access_token
            }
        }
    )
}