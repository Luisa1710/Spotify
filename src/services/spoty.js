import { URI,PETICION} from "../helpers/datospeticionGET.js";
import { paintSongs } from "../controllers/controladorpintarcanciones.js";
import { querieSongs} from "./servicioconsultarcanciones.js";

// Consumir un API
let songs = await querieSongs(URI,PETICION);
console.log(songs);
paintSongs(songs);
