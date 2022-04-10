//Arrow Functions // Es otra forma de declarar funciones; las funciones sufrieron un gran cambio al mejorar la semántica y la simplicación de éstas.
//Forma anterior
// const sumar2 = function() { 
//     console.log(3+3);
// }
// sumar2();

// Forma nueva
const sumar2 = (n1, n2) =>  
    console.log(n1 + n2);

sumar2(5, 10);

const aprendiendo = tecnologia => console.log(`Aprendiendo $ {tecnologia}`);

aprendiendo('JavaScript')

//Ejemplo con carrito de compras // Tomamos el ejemplo de 15.js

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
// Forma anterior
// meses.forEach(function(mes){
//     console.log(mes);
// });
// Nos muestra en la consola todos los meses. Éste itera sobre cada uno de ellos. (O sea pasa por cada uno de ellos para ver si existe y lo muestra).
// Forma Nueva
meses.forEach(mes => {
     if(mes = 'Marzo') { 
         console.log('Marzo si existe');
     }
 });
 

// Esto es una estructura de control y se vera con más detalle más adelante.


//Some ideal para arreglos de objetos

// Forma anterior
// resultado = carrito.some(function (producto) {
//     return producto.nombre === 'Celular'
// })

// Forma nueva
resultado = carrito.some (producto => 
    producto.nombre === 'Celular'
 );


// reduce
// Forma Anterior
// resultado = carrito.reduce(function (total, producto) { return total + producto.precio }, 0);
// Obtenemos el total de los productos del carrito.
// forma Nueva
resultado = carrito.reduce( (total, producto) => total + producto.precio, 0);


//Filter
//Forma Anterior
resultado = carrito.filter(function (producto) { return producto.precio > 400 }); // Nos muestra los productos mayor de 400

//Forma Nueva
resultado = carrito.filter (producto => producto.precio > 400 );

//Forma Anterior

// resultado = carrito.filter(function (producto) { return producto.nombre === 'Celular' }); // Se trae solo Celular.
//Repitiendo la fórmula puedo negar la condición y mostrarme todos los productos sin celular, con está sutil variación quitar sólo un igual (=) al comienzo y poner (!)

//Forma Nueva
resultado = carrito.filter( producto => producto.nombre !== 'Celular');

console.log(resultado);