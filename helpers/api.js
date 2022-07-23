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