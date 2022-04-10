// Objeto Métodos para modificar. Un objeto creado cómo "const" o "let" puede ser modificado y agregar nuevas propiedades. Pero una variable que use la misma semántica del const no. Para evitar que por alguna razón sufra alguna alteración el objeto usamos Object.Freeze; con esto se congela y no se le pueden agregar más valores.
"use strict"; // Al añadir esto ejecuta el código de JS de forma estricta y que debamos seguir las buenas prácticas.
const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true,
}

Object.freeze(producto); // Con esto no aparece "Imagen.jpg" No te permite agregar, modificar ni eliminar propiedades.
Object.seal(producto); //No te permite agregar, eliminar pero si modificar las propiedades existentes.


// producto.imagen = "imagen.jpg"; //En la consola nos marca error. "...Object is not extensible", nos está indicando que no podemos añadir propiedades ya que el objeto está sellado. (Blindado a cualquier cambio). // ¿como sabemos si un Objeto está sellado?

console.log(Object.isFrozen(producto)); //Aparece en la consola un true. (Verdadero)



console.log(producto);

