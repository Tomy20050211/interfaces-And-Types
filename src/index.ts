import {
  emailDeUusario,
  filtrarUsuariosActivos,
  usuarios,
  usuariosAdmin,
} from "./modules/usuarios/usuarios.tarea.js";
import {
  agregarAlCarrito,
  filtrarPorCategoria,
  listaDeProductos,
  mostrarTotal,
  stockMenorDeCinco,
} from "./modules/ecommerce/ecommerce.tarea.js";
import { carrito } from "./modules/ecommerce/ecommerce.data.js";
import {
  arrayProyectos,
  desarrolladores,
  proyecto1,
} from "./modules/equipo-desarrollo/equipoDesarrollo.data.js";
import {
  contarIssues,
  encontrarDesarrollador,
  filtrarPorHabilidad,
  mostrarProyecto,
} from "./modules/equipo-desarrollo/equipoDesarrollo.tarea.js";

import {
 ordenesPorEstado,
 } from "./modules/ordenes/ordenes.tarea.js";
import { arrayOrdenes } from "./modules/ordenes/ordenes.data.js";


// =========================================================
// SECCION 1: CONSULTAS DEL SISTEMA DE USUARIOS
// =========================================================

// Consulta 1:
// Mostrar solo los usuarios que estan activos.
// filtrarUsuariosActivos(usuarios);

// Consulta 2:
// Mostrar los usuarios que tienen el rol de admin.
// usuariosAdmin(usuarios);

// Consulta 3:
// Mostrar el email de cada usuario registrado.
// emailDeUusario(usuarios);

// =========================================================
// SECCION 2: CONSULTAS DEL ECOMMERCE
// =========================================================

// Consulta 1:
// Mostrar el total actual del carrito.
// mostrarTotal(carrito);

// Consulta 2:
// Filtrar productos por una categoria especifica.
// filtrarPorCategoria(listaDeProductos, "Ropa");
// filtrarPorCategoria(listaDeProductos, "Comida");
// filtrarPorCategoria(listaDeProductos, "Electricidad");

// Consulta 3:
// Mostrar los productos que tienen stock menor a 5.
// stockMenorDeCinco(listaDeProductos);

// Consulta 4:
// Agregar un nuevo producto al carrito y mostrar el carrito actualizado.
// agregarAlCarrito(carrito);

// =========================================================
// SECCION 3: CONSULTAS DEL EQUIPO DE DESARROLLO
// =========================================================

// Consulta 1:
// Mostrar toda la informacion de un proyecto.
// mostrarProyecto(proyecto1);

// Consulta 2:
// Buscar desarrolladores que tengan una habilidad especifica.
// filtrarPorHabilidad(desarrolladores, "Typescript");

// Consulta 3:
// Contar cuantos issues tiene un proyecto.
// contarIssues(proyecto1);

// Consulta 4:
// Buscar en que proyecto se encuentra un desarrollador.
// encontrarDesarrollador("Thomas", arrayProyectos);

// =========================================================
// SECCION 4: CONSULTAS DE ORDENES Y PAGOS
// =========================================================

//consulta 1:
//Filtrar órdenes por estado.
ordenesPorEstado(arrayOrdenes)
