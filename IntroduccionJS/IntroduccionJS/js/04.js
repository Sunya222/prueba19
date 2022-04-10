// String o cadenas de textos

const tweet = 'Aprendiendo JavaScript con el curso de Desarrollo Web Completo'; // Es valedero poner el valor entre comillas dobles "" pero en caso de tener que colocar pulgadas se genera conflicto. la solucion es usar comilla simple 'en la apertura y en el cierre'
//console.log(tweet.length) // Esta es la forma de consultar las variables en la consola y da 62 que es el número de letras que tiene la frase "Aprendie..."
const producto2 = 'Monitor HD"'; //const tweet2 = 'Monitor HD"' console.log(producto2) // Aquí nos muestra en la consola es el valor ('Monitor 20")

// length para la extención
console.log(tweet.length)
console.log(producto2) 

// indexOf Retorna a una Posición. Nos señala que en la posición 12 se encuentra la palabra JavaScript (parte del cero,uno,dos...) se comienza a contar desde la primera letra Aprendiendo JavaScript...
console.log(tweet.indexOf('JavaScript'));
console.log(producto2.indexOf('tablet')); // Nos señala en la consola -1 cualquier número comenzando de cero y que sea negativo significa que lo que buscamos no existe (tablet en este caso).

//includes (Retorna true o false)
console.log(tweet.includes('JavaScript')); // Nos señala en la consola si es true o false. Esta es una forma más moderna que la anterior indexof que lleva años.
console.log(producto2.includes('tablet')); 
