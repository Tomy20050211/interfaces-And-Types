import type { Orden } from "./ordenes.interface.js";

//Filtrar ordenes por estado

export function ordenesPorEstado(arrayOrdenes: Orden[]): void {
  const estados = ["pendiente", "pagado", "enviado"] as const;

  for (const estado of estados) {
    console.log(`Ordenes con estado ${estado}:`);

    arrayOrdenes
      .filter((o) => o.estado === estado)
      .forEach((orden) => console.log(orden));
  }
}
