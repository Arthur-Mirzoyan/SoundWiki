import axios from 'axios';
import { Buffer } from 'buffer';

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
        alert(error);
    }
}

export default async function getSpotifyItemsByName(name, type) {
    name = name.trim().replace(' ', '+');
    const token = await getSpotifyToken();

    try {
        return await axios(`https://api.spotify.com/v1/search?q=${name}&type=${type}&limit=10`, {
            'method': 'GET',
            'headers': {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token.data.access_token
            }
        })
    }
    catch (error) {
        return
    }
}

export async function getSpotifyRecommendations(genres) {
    const token = await getSpotifyToken()

    return axios(`https://api.spotify.com/v1/recommendations?market=US&&seed_genres=${genres.join('%2C')}`, {
        'method': 'GET',
        'headers': {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token.data.access_token
        }
    })
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
    })
}

export async function getSpotifyArtistTopTracks(id) {
    const token = await getSpotifyToken()

    return axios(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=US`, {
        'method': 'GET',
        'headers': {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token.data.access_token
        }
    }
    )
}

export async function getSpotifyArtistRelatedArtists(id) {
    const token = await getSpotifyToken()

    return axios(`https://api.spotify.com/v1/artists/${id}/related-artists`, {
        'method': 'GET',
        'headers': {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token.data.access_token
        }
    }
    )
}