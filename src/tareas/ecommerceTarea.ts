import { producto1, producto2, producto3, producto4, producto5, carrito } from "../data/ecommerceData.js";
import type { Producto, Carrito } from "../interfaces/ecommerceInterface.js";

//creacion de un array que guarde mis productos

export const listaDeProductos:Producto[] = [producto1,producto2,producto3,producto4,producto5];

//Calcular el total de todos los productos

export function mostrarTotal(carrito:Carrito): void{
    console.log(`- precio total de todos los productos: ${carrito.total}$`)
};

//Filtrar productos por categoria

export function filtrarPorCategoria(listaDeProductos: Producto[], categoria: string): void {
  for (const producto of listaDeProductos) {
    if (producto.categoria === categoria) {
      console.log(`Producto de categoria ${categoria}: ${producto.nombre}`);
    }
  }
}
