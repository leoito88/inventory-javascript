# Inventario
## Link del Proyecto
https://leoito88.github.io/inventory-javascript/

## Consigna del trabajo
En este proyecto, desarrollarás un sistema de gestión de inventario para una tienda utilizando JavaScript. El sistema permitirá administrar productos y realizar algunas operaciones básicas sobre ellos.

let inventario = [
    {
        nombre: "Laptop",
        categoria: "Electrónica",
        precio: 1000,
        cantidad: 10,
        codigo: "P001"
    },
    {
        nombre: "Smartphone",
        categoria: "Electrónica",
        precio: 700,
        cantidad: 25,
        codigo: "P002"
    },
    {
        nombre: "Teclado",
        categoria: "Accesorios",
        precio: 50,
        cantidad: 50,
        codigo: "P003"
    },
    {
        nombre: "Monitor",
        categoria: "Electrónica",
        precio: 300,
        cantidad: 15,
        codigo: "P004"
    },
    {
        nombre: "Silla de Oficina",
        categoria: "Muebles",
        precio: 150,
        cantidad: 20,
        codigo: "P005"
    }
];

a. Agregar Producto: Implementa una función agregarProducto que reciba un objeto producto (con las propiedades mencionadas) y lo añada al array inventario.

b. Eliminar Producto: Implementa una función eliminarProducto que reciba el código de un producto y lo elimine del array inventario.

c. Actualizar Cantidad: Implementa una función actualizarCantidad que reciba el código de un producto y una nueva cantidad, y actualice la cantidad del producto correspondiente en el array inventario.

d. Buscar Producto por Categoría: Implementa una función buscarProductoPorCategoria que reciba una categoría (string) y devuelva un array con todos los productos de esa categoría.

e. Calcular Valor Total del Inventario: Implementa una función calcularValorTotal que calcule y devuelva el valor total del inventario (suma del precio de cada producto multiplicado por su cantidad).

## Modo de uso

Tocar F12 y seleccionar Consola para ingresar los siguientes comandos:

### a) Para agregar producto:
agregarProducto({
nombre: "Impresora",
categoria: "Electrónica",
precio: 250,
cantidad: 5,
codigo: "P006"
})

inventario

Nos mostraría lo siguiente:
![1](https://github.com/leoito88/inventory-javascript/assets/59623841/07ce2585-b44a-43db-9a76-43ab34c4f2c5)

Como podemos ver se agrega en la última línea el item impresora

### b) Para Eliminar producto:
eliminarProducto("P002")

inventario

Nos mostraría lo siguiente:
![2](https://github.com/leoito88/inventory-javascript/assets/59623841/4765aa4d-e3c7-4a41-a748-d769df303ad3)

En este caso se elimina el item P002 que sería Smartphone

### c) Para Actualizar cantidad:
actualizarCantidad("P003", 45)

inventario

Nos mostraría lo siguiente:
![3](https://github.com/leoito88/inventory-javascript/assets/59623841/00115b9b-03db-4a1e-8f0b-c384e0fe4207)

Con este comando actualizamos la cantidad del item P003 de 50 a 45

### d) Para buscar por categoría:
console.log(buscarProductoPorCategoria("Electrónica"))

Nos mostraría lo siguiente:
![4](https://github.com/leoito88/inventory-javascript/assets/59623841/622a8016-8c27-48c6-83a3-ba51a88b6759)

Con el comando anterior sólo mostramos los items con categoría Electrónica

### e) Para calcular el valor total:
console.log("Valor total del inventario: $" + calcularValorTotal())

Nos mostraría lo siguiente: <br>
![5](https://github.com/leoito88/inventory-javascript/assets/59623841/13aeccc7-92ce-480e-b136-bd49984e74b1) <br>
En este caso nos está mostrando el precio total de todos los items menos el P002




