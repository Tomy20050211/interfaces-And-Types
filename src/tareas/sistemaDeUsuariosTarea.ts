import { usuario1, usuario2, usuario3, usuario4 } from '../data/sistemaDeUsuariosData.js';
import type { Usuario } from '../interfaces/sistemaDeUsuariosInterface.js';

// Guardar mis usuarios en una lista
export const usuarios: Usuario[] = [usuario1, usuario2, usuario3, usuario4];

//Filtrar usuarios activos

export function filtrarUsuariosActivos(usuarios: Usuario[]): void {
    usuarios.filter(u => u.activo == true)
        .map((u) => u.nombre)
        .forEach((nombre) => console.log(`- Los usuarios activos son: ${nombre}`));
};


//Obtener los usuarios que son Admin

export function usuariosAdmin(usuarios:Usuario[]): void{
     usuarios.filter(u => u.rol == "admin")
     .map((u) => u.nombre)
     .forEach((nombre) => console.log(`- Los usuarios con el rol de admin son: ${nombre}`))
};

//Crear una función que reciba usuarios y devuelva solo sus emails

export function emailDeUusario(usuarios:Usuario[]): void{
    usuarios.forEach((e) => console.log (`- Email de usuarios : ${e.email}`))
}