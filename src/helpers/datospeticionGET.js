
const ID_ARTISTA ="13wFTN72PGSUxzEHJP5Ljs"


export const URI = `https://api.spotify.com/v1/artists/${ID_ARTISTA}/top-tracks?market=US`

const TOKEN = "Bearer BQBf_tYgN0xT843VnwxPn3g5_7eoq45s-a_tP-DSoyvGwxPoAY9evb3ZlQmqg3Lct1XJJq30ruWX8zZBs0IobvR5cZwgOnSWsUTwreSuZXOYaubx7cuISyff6yJYqMBclmEF1emlHOCbWHExtmmCayIILW79QQIoPpGELQUOygKB2a70"

export const PETICION = {

method:"GET",
headers:{
    Authorization: TOKEN
}
}