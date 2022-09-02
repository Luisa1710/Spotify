import { generarURI } from "../helpers/generarURI.js"
import {PETICION} from "../helpers/datospeticionGET.JS"
import { querieSongs } from "../services/servicioconsultarcanciones.js"
import {paintSongs} from '../controllers/controladorpintarcanciones.js';


let buttonSearch= document.getElementById("buttonSearch")
buttonSearch.addEventListener("click",function(evento){

    let artist = document.getElementById("artist")
    const URI=  generarURI(artist.value);


        async function activateService (){
        let songs = await querieSongs(URI,PETICION);
        paintSongs(songs)
        

    }
   
    activateService()
    
    


})