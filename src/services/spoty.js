//Consumiendo API
//URI
const URI ="https://api.spotify.com/v1/artists/5YGY8feqx7naU7z4HrwZM6/top-tracks?market=US"

//METODO

const PETICION = {

method:"GET",
headers:{
    Authorization:"Bearer BQAuxDhfEUQeHbZXcz1bPXfuNR2ggm1W5GI_q0dNr3pdpqZLEKxIlgwclo6HF4HQ19OHgLjUU_b8U0LU_ONLfrdfDKO2Mq55NyYHl94ZIVu1S1jjEer32iavv6n9iGbfZnSveOOmgxO1Sx_epAiJATd6Q9P-uZRhNco5kuz6485iCqEZ"
}

}

//CONSUMO API
fetch(URI,PETICION)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){

    let container = document.getElementById("container")
    let row = document.getElementById("row");

    respuesta.tracks.forEach(function(song) {

        
        console.log( song.preview_url)
        console.log( song.popularity)
        console.log( song.album.images[0].url)
        console.log( song.name)
        
    let column = document.createElement("div")
    column.classList.add("col")
    
    let card = document.createElement("div")
    card.classList.add("card","p-3","h-100")
    
    let audio = document.createElement("audio")
    audio.classList.add("w-100")
    audio.setAttribute("controls","controls")
    
    let name = document.createElement("h4")
    audio.src = song.preview_url
    name.classList.add("text-center")
    name.textContent = song.name
    
    let image = document.createElement("img")
    image.src= song.album.images[0].url
    
    let popularity = document.createElement("p")
    popularity.classList.add("invisible")
    popularity.textContent= song.popularity
    
    card.appendChild(image)
    card.appendChild(name)
    card.appendChild(audio)
    card.appendChild(popularity)
    column.appendChild(card)
    row.appendChild(column)
  
    });


})
.catch(function(respuestaError){
    console.log( respuestaError)
})