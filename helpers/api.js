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