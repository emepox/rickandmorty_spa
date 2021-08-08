import Header from "../templates/Header";
import Home from "../pages/Home";
import Character from "../pages/Character";
import Error404 from "../pages/Error404";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";


const routes = {
    "/": Home,
    "/:id": Character,
    "/contact": "Contact",
}

const router = async () => {
    const header = null || document.getElementById("header");
    const content = null || document.getElementById("content");

// Coge el header
    header.innerHTML = await Header();
// Render contenido
    let hash = getHash(); // Coge el hash y lo pasa por la función de splice.
    let route = await resolveRoutes(hash); // Dependiendo de si es / o un Id lo manda a un sitio o a otro.
    let render = routes[route] ? routes[route] : Error404; // Si encuentra la ruta, muestra la ruta; si no, muestra 404.
    content.innerHTML = await render(); // Render contenido.
};

export default router;