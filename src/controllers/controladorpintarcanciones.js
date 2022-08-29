function pintarCanciones (songs){
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
}