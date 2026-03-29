
import { filtrarUsuariosActivos,usuariosAdmin, emailDeUusario, usuarios } from "./tareas/sistemaDeUsuariosTarea.js";
import { mostrarTotal, filtrarPorCategoria, listaDeProductos, stockMenorDeCinco, agregarAlCarrito} from "./tareas/ecommerceTarea.js";
import { carrito } from "./data/ecommerceData.js";
import { arrayProyectos, desarrolladores, proyecto1 } from "./data/equipoDesarrolloData.js";
import { mostrarProyecto, filtrarPorHabilidad, contarIssues, encontrarDesarrollador } from "./tareas/equipoDesarrolloTarea.js";

//------------------------------------------------------------------

// - Crear una lista de usuarios
// - Filtrar solo los usuarios activos
// - Obtener todos los usuarios con rol `admin`
// - Crear una función que reciba usuarios y devuelva solo sus emails

//filtrarUsuariosActivos(usuarios);
//usuariosAdmin(usuarios);
//emailDeUusario(usuarios);

//-------------------------------------------------------------------

// - Calcular el total del carrito
// - Filtrar productos por categoría
// - Obtener productos con stock menor a 5
// - Crear una función que agregue productos al carrito


//mostrarTotal(carrito)
//filtrarPorCategoria(listaDeProductos, "Ropa");
//filtrarPorCategoria(listaDeProductos, "Comida");
//filtrarPorCategoria(listaDeProductos, "Electricidad");
//stockMenorDeCinco(listaDeProductos);
//agregarAlCarrito(carrito)

//-------------------------------------------------------------------

mostrarProyecto(proyecto1);

filtrarPorHabilidad(desarrolladores, "Typescript")

contarIssues(proyecto1)

encontrarDesarrollador( "Thomas", arrayProyectos)