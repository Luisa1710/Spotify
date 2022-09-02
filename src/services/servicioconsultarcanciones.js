export async function querieSongs(URI,PETICION){
    let respuesta = await fetch(URI,PETICION)
    return await respuesta.json()

}