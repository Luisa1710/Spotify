
const ID_ARTISTA ="13wFTN72PGSUxzEHJP5Ljs"


export const URI = `https://api.spotify.com/v1/artists/${ID_ARTISTA}/top-tracks?market=US`

const TOKEN = "Bearer BQD5WH0WT6jTWiPpMPXG_HxGrK85crvk2QF-KzV2LC7q7gzwbl92zO3KnnehKtNLfU34pRkx0YqIZ3vfeZfZjXOmsfb6BSy5qgMgRZG9FWnd6pEds2W4zLVnFVOVojZ0zAkTf9hsrCzBpFy0gHKMTkfc4Uct9cVGPO_mP99f1EFeuh_A"

export const PETICION = {

method:"GET",
headers:{
    Authorization: TOKEN
}
}