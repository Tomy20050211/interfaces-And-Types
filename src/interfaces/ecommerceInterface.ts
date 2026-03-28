
//Cracion de tipo categoria para la categoria del producto

export type Categoria = "Ropa" | "Electricidad" | "Comida";

//Cracion de interfaz para el producto y el corrito

export interface Producto {
    id: number,
    nombre: string,
    precio: number,
    categoria: Categoria,
    stock: number
};

export interface Carrito {
    productos: Producto[],
    total: number

};
    