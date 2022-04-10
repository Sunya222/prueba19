const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audífonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 },
];

// ForEach 

// carrito.forEach(function(producto) {
//     console.log('Una vez por cada elemento')
// }); //Aquí utilizamos un function 

carrito.forEach(producto => console.log(producto.nombre)); // Aquí transformamos el código en arrow funcion, mas simple. Si queremos ver en consola e imprimir en html lo usamos. diseñado para iterar y mostrar los resultados.

// const arreglo2 = carrito.map(producto => console.log(producto.nombre)); // Aquí si se quiere crear un nuevo arreglo se usa el map

const arreglo2 = carrito.map(producto => `${producto.nombre} - {producto.precio}`);
     console.log(arreglo2); // Éste es un ejemplo de cómo creamos un arreglo con este código. (video 130 minuto 6:42)






// map