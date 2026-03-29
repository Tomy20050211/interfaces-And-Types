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


//Obtener productos con stock por debajo de 5

export function stockMenorDeCinco(listaDeProductos:Producto[]): void{
  listaDeProductos.filter(p => p.stock  < 5)
  .map((p) => p.nombre)
  .forEach((nombre) => console.log(nombre))
};

//Crar una funcion que agregue productos al carrito

export function agregarAlCarrito(carrito:Carrito): void {
   const producto6:Producto = {
    id: 6,
    nombre: "Hamburguesa",
    precio: 2000,
    categoria: "Comida",
    stock: 1
   };

   carrito.productos.push(producto6);
   carrito.total += producto6.precio;
   console.log(carrito)
}
