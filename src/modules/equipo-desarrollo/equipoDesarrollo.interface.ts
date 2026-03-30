//Creacion de interfaces para desarrollador y proyecto

export interface Desarrolladores {
    id: number,
    nombre: string,
    habilidades: string[]
}


export interface Proyecto {
    id: number,
    nombre: string,
    equipo: Desarrolladores[],
    issues: string[],
    pullRequest: string[]
}
