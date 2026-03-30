import type { Proyecto, Desarrolladores } from "./equipoDesarrollo.interface.js";


// mostrar tood el proyecto
export const mostrarProyecto = (proyecto: Proyecto): void => {
    console.log(`Proyecto: ${proyecto.nombre}`);
    console.log("Equipo:");

    proyecto.equipo.forEach((desarrollador: Desarrolladores) => {
        console.log(
            `- ${desarrollador.nombre}: ${desarrollador.habilidades.join(", ")}`
        );
    });

    console.log(`Issues: ${proyecto.issues.join(", ")}`);
    console.log(`Pull Request: ${proyecto.pullRequest.join(", ")}`);
};

//Filtrar desarrollador por habilidad

export function filtrarPorHabilidad(desarrollador: Desarrolladores[], habilidad: string): void {
    for (const d of desarrollador) {
        if (d.habilidades.includes(habilidad)) {
            console.log(d.nombre)
        }
    }
}

//Contar cuantos issues tiene un proyecto

export function contarIssues(proyecto1:Proyecto):void{
    console.log( `El proyecto ${proyecto1.nombre} tiene ${proyecto1.issues.length} issues`)
}

//Buscar entre varios proyectos un desarrollador en especifico

export function encontrarDesarrollador( nombre: string, arrayProyectos: Proyecto[]): void {
    for (const proyecto of arrayProyectos) {
        for (const d of proyecto.equipo) {
            if (d.nombre === nombre) {
                console.log(`${d.nombre} esta en el proyecto ${proyecto.nombre}`)
            }
        }
    }
}
