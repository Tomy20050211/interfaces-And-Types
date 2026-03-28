//Creacion de tipo rol para el rol del usuario

export type Rol = "admin" | "user" | "guest";

//Creacion de una interfaz para el usuario

export interface Usuario {
    id: number;
    nombre: string;
    email: string;
    rol: Rol;
    activo: boolean;
}