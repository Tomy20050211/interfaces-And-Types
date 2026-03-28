import type { Producto,Carrito  } from "../interfaces/ecommerceInterface.js";

//Creacion de varios productos individuales usuando la interfaz de producto

export const producto1:Producto = {
    id: 1,
    nombre: "Pizza",
    precio: 3000,
    categoria: "Comida",
    stock: 30
};

export const producto2:Producto = {
    id: 2,
    nombre: "Celular",
    precio: 700000,
    categoria: "Electricidad",
    stock: 200
};
export const producto3:Producto = {
    id: 3,
    nombre: "Camisa Roja",
    precio: 30000,
    categoria: "Ropa",
    stock: 3000
};
export const producto4:Producto = {
    id: 4,
    nombre: "Computador",
    precio: 1000000,
    categoria: "Electricidad",
    stock: 50
};
export const producto5:Producto = {
    id: 5,
    nombre: "Zapatos",
    precio: 400000,
    categoria: "Ropa",
    stock: 20
};

// Creacion de carrito

export const carrito: Carrito = {
    productos: [producto1, producto2, producto3, producto4, producto5],
    total: producto1.precio + producto2.precio + producto3.precio + producto4.precio + producto5.precio
};

