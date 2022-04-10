// Array Methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

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

// forEach
// meses.forEach(function(mes){
//     console.log(mes);
// });
// Nos muestra en la consola todos los meses. Éste itera sobre cada uno de ellos. (O sea pasa por cada uno de ellos para ver si existe y lo muestra).

// meses.forEach(function(mes){
//     if(mes = 'Marzo'); { 
//         console.log('Marzo si existe');
//     }
// });
// Esto es una estructura de control y se vera con más detalle más adelante.

// includes
// const resultado = meses.includes('Marzo');
// console.log(resultado);
//Funciona muy bien para arreglos planos como el ejemplo de los meses pero no para los objetos como el ejemplo de los televisores. es similar al forEach.

//Some ideal para arreglos de objetos
// let resultado = meses.includes('Diciembre') //Lo mejor es utilizar .includes. Es la mejor opción para arreglos planos como el ejemplo de los meses.

resultado = carrito.some(function (producto) {
    return producto.nombre === 'Celular'
})

// reduce
resultado = carrito.reduce(function (total, producto) { return total + producto.precio }, 0);
// Obtenemos el total de los productos del carrito.
//Otra forma es a través de un Array Function, fórmula más simplicada: // resultado = carrito.reduce((total,producto) => total + producto.precio, 0);

//Filter
resultado = carrito.filter(function (producto) { return producto.precio > 400 }); // Nos muestra los productos mayor de 400

resultado = carrito.filter(function (producto) { return producto.nombre === 'Celular' }); // Se trae solo Celular.
//Repitiendo la fórmula puedo negar la condición y mostrarme todos los productos sin celular, con está sutil variación quitar sólo un igual (=) al comienzo y poner (!)


console.log(resultado);