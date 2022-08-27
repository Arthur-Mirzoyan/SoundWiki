import axios from 'axios';

const AUTH_TOKEN = ""

async function getSpotifyToken() {
    return axios('https://accounts.spotify.com/api/token', {
        'method': 'POST',
        'headers': {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${AUTH_TOKEN}`
        },
        data: 'grant_type=client_credentials'
    })
}

export default async function getSpotifyItemsByName(name, type) {
    name = name.trim().replace(' ', '+');
    const token = await getSpotifyToken();

    return makeSpotifyRequest(`https://api.spotify.com/v1/search?q=${name}&type=${type}&limit=20`, token)
}

export async function getSpotifyRecommendations(genres) {
    const token = await getSpotifyToken()

    return makeSpotifyRequest(`https://api.spotify.com/v1/recommendations?market=US&&seed_genres=${genres.join('%2C')}`, token)
}

export async function getSpotifyArtist(id) {
    const token = await getSpotifyToken();

    return makeSpotifyRequest(`https://api.spotify.com/v1/artists/${id}`, token)
}
export async function getSpotifyTrack(id) {
    const token = await getSpotifyToken();

    return makeSpotifyRequest(`https://api.spotify.com/v1/tracks/${id}`, token)
}

export async function getSpotifyArtistTopTracks(id) {
    const token = await getSpotifyToken()

    return makeSpotifyRequest(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=US`, token)
}

export async function getSpotifyArtistRelatedArtists(id) {
    const token = await getSpotifyToken();

    return makeSpotifyRequest(`https://api.spotify.com/v1/artists/${id}/related-artists`, token)
}

export async function getSpotifyArtistAlbumResults(id, limit = -1) {
    const token = await getSpotifyToken()

    let requestedLimit = limit > 50 || limit === -1 ? 50 : limit
    const resultItems = []

    let next = `https://api.spotify.com/v1/artists/${id}/albums?&market=US&include_groups=album&limit=${requestedLimit}`
    do {
        const data = (await makeSpotifyRequest(next, token)).data

        next = data.next
        resultItems.push(...data.items)
    } while (next !== null && (limit === -1 || resultItems.length < limit))

    return resultItems
}

export async function getSpotifyAlbumAndResults(id, limit = -1) {
    const token = await getSpotifyToken()
    const album = (await makeSpotifyRequest(`https://api.spotify.com/v1/albums/${id}?market=US`, token)).data
    const tracks = [...album.tracks.items]

    let next = album.tracks.next
    while (next !== null && (limit === -1 || tracks.length < limit)) {
        const data = (await makeSpotifyRequest(next, token)).data

        next = data.next
        tracks.push(...data.items)
    }

    return [album, tracks]
}




async function makeSpotifyRequest(url, token, method = 'GET') {
    return axios(url, {
        'method': method,
        'headers': {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token.data.access_token
        }
    })
}