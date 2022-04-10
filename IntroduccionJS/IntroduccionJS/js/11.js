const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true,
}

//¿Cómo seleccionar un precio y crear una variable? // Forma anterior de traer los valores dentro de un objeto

// const precioProducto  = producto.precio;
// const nombreProducto = producto.nombreProducto;

// console.log(precioProducto);
// console.log(nombreProducto);


// Destructuring de Objetos // Forma nueva de traer los valores dentro de un objeto y en una sóla línea. Es una nueva sintaxis.
const {precio, nombreProducto} = producto;

console.log(precio);
console.log(nombreProducto);