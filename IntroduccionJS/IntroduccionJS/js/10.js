//Objetos Semántica anterior

const nombreProducto = "Monitor 20 Pulgadas";
const precio = 300;
const disponible = true

//Objetos Semántica nueva (Es lo mismo)
const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true,
}


// console.log(producto);

// console.log(producto.precio); // Con esta forma podemos acceder en la consola al precio u otros datos.
// console.log(producto.nombreProducto);
// console.log(producto.disponible);

// Agregar nuevas propiedades
producto.imagen = "imagen.jpg";

// Eliminar Propiedades
delete producto.disponible;
console.log(producto);


