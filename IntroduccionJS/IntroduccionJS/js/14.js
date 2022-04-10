// Arreglos o Arrays (Inglés) Se usan por ejemplo en un carrito de compras o en Facebook cuando los amigos dan un me gusta. sirve para agrupar elementos del mismo tipo o relacionados.

const numeros = [10,20,30,40,50];
// console.table(numeros);

// const meses = ['Enero','Febrero', 'Marzo', 'Abril', 'Mayo'];
//  console.table(meses);

 // Acceder a los valores de un arreglos 
//   console.log(numeros[0]);
//   console.log(numeros[1]);
//   console.log(numeros[2]);
//   console.log(numeros[3]);
//   console.log(numeros[4]); //Si lo vemos en la consola nos muestra la posición 4 (En el índice se empieza a contar desde el cero, uno,dos...en la mayoría de los lenguajes es así.) El valor que nos muestra es el 50 de la posición 4. Este codigo solo sirve para listar una sola vez.
  
  // conocer la extensión de un arreglo
//   console.log(meses,length); //En la consola nos muestra que hay 5 elementos.

  //Los arreglos tienen algo llamado Iterador (Código que se ejecuta mientras haya elementos en el arreglo). Con esto nos ahorramos el tener que listar uno a uno cuando queramos ver todos los elementos.
//   numeros.forEach( function(numero) {
//       console.log(numero);
//   })

// numeros[5] = 60; //Tiene sus limitaciones usar este código.

numeros.push(60); // podriamos añadir mas elementos después del 60 separando por comas: 60, 70,80,90... Esta agrega los datos al final. Hoy en dia se recomienda no modificar los datos originales, esta fórmula se está dejando de lado poco a poco.

numeros.unshift(-10,-20,-30); //Esta agrega los datos al inicio.


console.table(numeros); // En la consola vemos que añadimos una nueva posición 5 con el elemento 60. Nuestro arreglo ya tiene 6 elementos. 


// Fórmula de eliminar elementos, tomemos el ejemplo anterior de los meses.

// meses.pop(); // Elimina el último elemento del arreglo.

// meses.shift(); // Elimina el primer elemento del arreglo.

// meses.splice(2, 1); // Elimina "Marzo" se comienza a contar en el índice desde la posición 0 (Enero), 1 (Febrero), 2 (Marzo) y despues se coloca cuantos valores vamos a eliminar. (En este caso 1).Tiene desventajas, modifica el arreglo original.
// console.table(meses);

 // Rest Operator o Spread Operator (Este enfoque es mejor y se está utilizando actualmete ya que no modifica el arreglo original, similar al push.).

const nuevoArreglo = [...meses, 'Junio'];
console.log(nuevoArreglo); // La ventaja de esta nueva sintaxis es que si quisieramos poner junio en la primera posición se coloca antes de los tres puntos.



