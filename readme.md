# 📘 Ejercicios TypeScript — Interfaces & Types (Nivel Intermedio)

## 🎯 Objetivo
Practicar modelado de datos, tipado fuerte, reutilización de tipos y manipulación de estructuras usando `interface` y `type`.

---

## 🧩 Ejercicio 1 — Sistema de Usuarios

### 📌 Consigna
Define un modelo para usuarios de una aplicación.

### 🔧 Requisitos
- Un usuario tiene:
  - id
  - nombre
  - email
  - rol (`admin` | `user` | `guest`)
  - activo (boolean)

### 🧠 Tareas
- Crear una lista de usuarios
- Filtrar solo los usuarios activos
- Obtener todos los usuarios con rol `admin`
- Crear una función que reciba usuarios y devuelva solo sus emails

---

## 🧩 Ejercicio 2 — Productos y Carrito

### 📌 Consigna
Modela un sistema de e-commerce básico.

### 🔧 Requisitos
- Producto:
  - id
  - nombre
  - precio
  - categoría
  - stock

- Carrito:
  - lista de productos
  - total

### 🧠 Tareas
- Calcular el total del carrito
- Filtrar productos por categoría
- Obtener productos con stock menor a 5
- Crear una función que agregue productos al carrito

---

## 🧩 Ejercicio 3 — Proyectos y Equipo

### 📌 Consigna
Modela un sistema tipo GitHub.

### 🔧 Requisitos
- Desarrollador:
  - id
  - nombre
  - habilidades (array)

- Proyecto:
  - id
  - nombre
  - equipo (array de desarrolladores)
  - issues (array)
  - pull requests (array)

### 🧠 Tareas
- Listar nombres de desarrolladores de un proyecto
- Filtrar desarrolladores por habilidad (ej: "TypeScript")
- Contar cuántos issues tiene un proyecto
- Obtener todos los proyectos donde participe un desarrollador específico

---

## 🧩 Ejercicio 4 — Órdenes y Pagos

### 📌 Consigna
Simular un sistema de órdenes de compra.

### 🔧 Requisitos
- Orden:
  - id
  - cliente
  - productos (array)
  - estado (`pendiente` | `pagado` | `enviado`)

- Pago:
  - id
  - método (`tarjeta` | `efectivo` | `paypal`)
  - monto

### 🧠 Tareas
- Filtrar órdenes por estado
- Calcular el total vendido (solo órdenes pagadas)
- Relacionar pagos con órdenes
- Crear un resumen de ventas por método de pago

---

## 🧩 Ejercicio 5 — Sistema de Cursos

### 📌 Consigna
Modelar una plataforma educativa.

### 🔧 Requisitos
- Estudiante:
  - id
  - nombre
  - cursos (array)

- Curso:
  - id
  - nombre
  - profesor
  - calificaciones (array de números)

### 🧠 Tareas
- Calcular promedio de un curso
- Obtener estudiantes inscritos en un curso específico
- Filtrar cursos con promedio mayor a 4.0
- Crear una función que agregue un estudiante a un curso

---

## 🧩 Ejercicio 6 — Notificaciones

### 📌 Consigna
Crear un sistema de notificaciones tipadas.

### 🔧 Requisitos
- Tipos de notificación:
  - email
  - sms
  - push

Cada una tiene propiedades distintas.

### 🧠 Tareas
- Crear un tipo unión (`union type`)
- Mostrar mensajes diferentes según el tipo
- Filtrar solo notificaciones no leídas
- Marcar todas como leídas

---

## 🧩 Ejercicio 7 — Dashboard de Ventas

### 📌 Consigna
Simular datos para un dashboard.

### 🔧 Requisitos
- Venta:
  - id
  - fecha
  - producto
  - cantidad
  - precio unitario

### 🧠 Tareas
- Calcular ingresos totales
- Agrupar ventas por producto
- Obtener la venta más alta
- Filtrar ventas de un rango de fechas

---

## 🧩 Ejercicio 8 — Extensión de Tipos

### 📌 Consigna
Practicar herencia y composición.

### 🔧 Requisitos
- Crear un tipo base `Persona`
- Extenderlo a:
  - Cliente
  - Empleado

### 🧠 Tareas
- Diferenciar comportamientos según tipo
- Crear funciones que trabajen con ambos
- Usar `intersection types` para combinar datos
- Validar propiedades opcionales

---

## 🧩 Ejercicio 9 — API Response

### 📌 Consigna
Simular respuestas de una API.

### 🔧 Requisitos
- Respuesta:
  - status
  - data
  - error

### 🧠 Tareas
- Crear tipos genéricos (`<T>`)
- Manejar distintos tipos de data
- Simular éxito y error
- Crear función que procese respuestas

---

## 🧩 Ejercicio 10 — Logs del Sistema

### 📌 Consigna
Crear un sistema de logs tipado.

### 🔧 Requisitos
- Log:
  - tipo (`info` | `warning` | `error`)
  - mensaje
  - fecha

### 🧠 Tareas
- Filtrar logs por tipo
- Contar errores
- Ordenar logs por fecha
- Crear función para agregar logs

---

## 🚀 Extra (Nivel más pro)

- Usa `Readonly`
- Usa `Partial`
- Usa `Pick` / `Omit`
- Implementa `Discriminated Unions`
- Crea funciones genéricas reutilizables