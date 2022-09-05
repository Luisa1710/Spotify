
const ID_ARTISTA ="13wFTN72PGSUxzEHJP5Ljs"


export const URI = `https://api.spotify.com/v1/artists/${ID_ARTISTA}/top-tracks?market=US`

const TOKEN = "Bearer BQBZMecU22x4K1V0Mlsu5ofYA-FaoxMmVMIiUX21_IHQGPRqpZTgVsdDGHllnhiA6-F3Hvm5oLYY77R3EvriIXM06yi98VDEmlDV_1Xo_QnAmibRPkyyscA8T4u-a8nVjXCNIYTDCCrOFCmL-z2YSMfsKgy_GPRmESmL2FaQHz4lP8zP"

export const PETICION = {

method:"GET",
headers:{
    Authorization: TOKEN
}
}