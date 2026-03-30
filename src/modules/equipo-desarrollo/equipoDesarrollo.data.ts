import type { Proyecto, Desarrolladores } from "./equipoDesarrollo.interface.js";

//Creacion individual de desarrolladores siguiendo la interfaz 
export const dev1: Desarrolladores = {
     id: 1,
     nombre: "Thomas",
     habilidades:["Typescript"]
};

export const dev2: Desarrolladores = {
     id: 2,
     nombre: "Danny",
     habilidades:["Javascript"]
};

export const dev3: Desarrolladores = {
     id: 3,
     nombre: "Andres",
     habilidades:["C#"]
};

export const dev4: Desarrolladores = {
     id: 4,
     nombre: "Samuel",
     habilidades:["Java"]
};

//Array de desarrolladores
export const desarrolladores:Desarrolladores[] = [dev1, dev2, dev3, dev4];

//Creacion de proyectos individuales
export const proyecto1:Proyecto = {
    id:1,
    nombre: "Mahoraga",
    equipo: desarrolladores,
    issues: ["No c", "ola", "olaaaaa"],
    pullRequest: ["No c 2"]
};
export const proyecto2:Proyecto = {
    id:1,
    nombre: "Cafe tech",
    equipo: desarrolladores,
    issues: ["No c", "ola", "olaaaaa"],
    pullRequest: ["No c 2"]
};
export const proyecto3:Proyecto = {
    id:1,
    nombre: "Riwi moodle",
    equipo: desarrolladores,
    issues: ["No c", "ola", "olaaaaa"],
    pullRequest: ["No c 2"]
};

//Array de proyectos
export const arrayProyectos:Proyecto[] = [proyecto1, proyecto2,proyecto3];

