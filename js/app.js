/* En este proyecto, desarrollarás un sistema de gestión de inventario para una tienda utilizando JavaScript. El sistema permitirá administrar productos y realizar algunas operaciones básicas sobre ellos.

a. Agregar Producto: Implementa una función agregarProducto que reciba un objeto producto (con las propiedades mencionadas) y lo añada al array inventario.

b. Eliminar Producto: Implementa una función eliminarProducto que reciba el código de un producto y lo elimine del array inventario.

c. Actualizar Cantidad: Implementa una función actualizarCantidad que reciba el código de un producto y una nueva cantidad, y actualice la cantidad del producto correspondiente en el array inventario.

d. Buscar Producto por Categoría: Implementa una función buscarProductoPorCategoria que reciba una categoría (string) y devuelva un array con todos los productos de esa categoría.

e. Calcular Valor Total del Inventario: Implementa una función calcularValorTotal que calcule y devuelva el valor total del inventario (suma del precio de cada producto multiplicado por su cantidad).*/

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

// a. Agregar Producto
function agregarProducto(producto) {
    inventario.push(producto);
}

// b. Eliminar Producto
function eliminarProducto(codigo) {
    inventario = inventario.filter(producto => producto.codigo !== codigo);
}

// c. Actualizar Cantidad
function actualizarCantidad(codigo, nuevaCantidad) {
    let producto = inventario.find(producto => producto.codigo === codigo);
    if (producto) {
        producto.cantidad = nuevaCantidad;
    }
}

// d. Buscar Producto por Categoría
function buscarProductoPorCategoria(categoria) {
    return inventario.filter(producto => producto.categoria === categoria);
}

// e. Calcular Valor Total del Inventario
function calcularValorTotal() {
    return inventario.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
}