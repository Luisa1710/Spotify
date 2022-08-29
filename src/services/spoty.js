import {URI,PETICION} from "../helpers/datospeticionGET.js"

//CONSUMO API
fetch(URI,PETICION)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){

    let container = document.getElementById("container")
    let row = document.getElementById("row");

    


})
.catch(function(respuestaError){
    console.log( respuestaError)
})