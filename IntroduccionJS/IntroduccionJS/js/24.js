//For Loop (Es muy útil porque iteran sobre los arreglos) va a ejecutar un código mientras una condición sea evaluada como verdadera y deja de ejecutarla cuando esa condición deja de cumplir. El for loop cuenta con un index ó índice e inicia desde el cero o posición. Aquí comienza a ejecutar el código y dice: es 0 menor a 10 ? como es verdadero ejecuta el código, en la fórmula y va a incrementar de 1 en 1 (i++) En la consola nos muestra hasta el 9 ya que 10 < 10 no cumple la condición. Si queremos que salga el 10 se pone (<=10) ó (<11) Éste For nos ahorra al mostrar en la consola a través del console.log una larga lista hasta el nueve. (Simplifica)


// for( let i = 0; i < 10; i++) {
//     console.log(i);
// } 

//Otro ejercicio ¿Cómo identificar del 1 al 100  si el número actual es par o es impar?
// 1. El for se ejecuta si se cumple la condición de que i<10
// 2. Dentro de if se ejecuta ésta operación, si el residuo es igual a cero es un número par
 
// for( let i = 0; i < 10; i++) {
//     if( i % 2 === 0 ) {
//         console.log(`El Número ${i} es PAR`);
//     }
// }

//La misma fórmula pero con pares e impares
for( let i = 1; i <= 100; i++) {
    if( i % 2 === 0 ) {
        console.log(`El Número ${i} es PAR`); }
    else {
        console.log(`El Número ${i} es IMPAR`); }
}

// Otra forma para iterar en el carrito y mostrar los nombres. (En Amazon cuando vamos agregando cosas al carrito). En la vida real lo usaremos para iterar sobre distintos elementos u objetos.

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

for( let i = 0; i < carrito.length; i++){
    console.log(carrito [i].nombre);
}

// While loop Evalua la condición y si es verdadera ejecuta el código.

// let i = 1; // Índice

// while (i <= 100) { // Condición

//     if(i % 2 === 0){
//         console.log(`El Número ${i} es PAR`)
//     } else {
//         console.log(`El Número ${i} es IMPAR`)
//     }
//     i++ // Incremento
// }

// let i = 0; // Índice

// while (i < carrito.length) { // Condición
//     console.log(carrito [i].nombre)
    
//     i++ // Incremento   
// }

//diferencia del While loop con el Do While Loop

// let i = 20; // Índice

// while (i < 10) { // Condición

//     console.log('Desde el while loop');
    
//     i++ // Incremento   
// }
// 20 no es menor a 10 y no se cumple la condición. No muestra ninguna respuesta en la consola.

//Do While Loop

let i = 100; // En éste caso ejecuta el código al menos una vez y después evalua (i < 10) o sea ve si la condición se cumple.
do {
    console.log(i);

    i++;

} while(i < 10);

