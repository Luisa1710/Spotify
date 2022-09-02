//URI

const URI = 'https://accounts.spotify.com/api/token'

//DATOS DE ENVIO

const DATO1 = "grant_type=client_credentials"
const DATO2 = "client_id=66f4cf9d44724861b90a0f0b537f9c86"
const DATO3 = "client_secret=5d2c0036671347ba93d8d05e6cebccae"





//PETICIOM
const PETICION = {

    method: "POST",
    headers:{},
    body: DATO1+"&"+DATO2+"&"+DATO3

}
//FETCH


