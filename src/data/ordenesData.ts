import type { Orden, Pago } from "../interfaces/ordenesInterface.js";

//Creacion individual de ordenes, relacionando ambas interfaces

export const orden1:Orden ={
     id: 1,
     cliente:{
        id:1,
        metodo: "efectivo",
        monto:300000
     },
     productos:["Figura Hatsune Miku"],
     estado: "enviado"
};

export const orden2:Orden ={
     id: 2,
     cliente:{
        id:2,
        metodo: "paypal",
        monto:10000
     },
     productos:["Gorra"],
     estado:"pagado"
};
export const orden3:Orden ={
     id: 3,
     cliente:{
        id:3,
        metodo: "tarjeta",
        monto:300000
     },
     productos:["Lapices"],
     estado: "pendiente"
};
export const orden4:Orden ={
     id: 4,
     cliente:{
        id:4,
        metodo: "efectivo",
        monto:90000
     },
     productos:["Camisa anime"],
     estado: "enviado"
};

//Array de ordenes

export let arrayOrdenes: Orden[] = [orden1,orden2, orden3, orden4];

