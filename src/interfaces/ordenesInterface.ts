//Crar interfaces y tipos para una gestion de ordenes

export type Estado = "pendiente" | "pagado" | "enviado";
export type Metodo = "tarjeta" | "efectivo" | "paypal";

export interface Pago {
    id: number,
    metodo: Metodo,
    monto: number
};


export interface Orden  {
    id: number,
    cliente:Pago,
    productos:[string],
    estado: Estado,

};

