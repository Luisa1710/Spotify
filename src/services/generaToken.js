//URI

const URI = 'https://accounts.spotify.com/api/token'

//DATOS DE ENVIO

const DATA1 = "grant_type=client_credentials"
const DATA2 = "client_id=66f4cf9d44724861b90a0f0b537f9c86"
const DATA3 = "client_secret=5d2c0036671347ba93d8d05e6cebccae"


//PETICION
const PETICION = {

    method: "POST",
    headers:{"Content-Type":"application/x-www-form-urlencoded"},
    body: DATA1+"&"+DATA2+"&"+DATA3

}
//FETCH
// Promesa
fetch(URI,PETICION)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    
    
    console.log(respuesta)


})
.catch(function(respuestaError){
    console.log(respuestaError)
})


//ASYNC/AWAIT

async function obtenerToken(){
let respuesta = await fetch(URI,PETICION)
return await respuesta.json()
}

let TOKEN = await obtenerToken()

console.log(TOKEN.token_type+" "+TOKEN.access_token )











