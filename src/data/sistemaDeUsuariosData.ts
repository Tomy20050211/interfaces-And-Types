import type { Rol, Usuario } from '../interfaces/sistemaDeUsuariosInterface.js';

//Creacion de usuarios usando la interfaz de usuario

export const usuario1: Usuario = {
        id: 1,
        nombre: "Thomas",
        email: "thomas@email.com",
        rol: "admin",
        activo: true
};

export const usuario2: Usuario = {
        id: 2,
        nombre: "Dannye",
        email: "Dannys@email.com",
        rol: "admin",
        activo: false
};

export const usuario3: Usuario = {
        id: 3,
        nombre: "Juan",
        email: "Juan@email.com",
        rol: "user",
        activo: true
};

export const usuario4: Usuario = {
        id: 4,
        nombre: "Jhonny",
        email: "jonny@email.com",
        rol: "user",
        activo: false
};