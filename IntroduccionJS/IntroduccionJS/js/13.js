// Unir objetos con spread operator

const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true,
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

const nuevoProducto = {...producto, ...medidas}; // Con esto podemos unir o mutar (Jerga más técnica), sin tocar los datos originales.

console.log(producto);
console.log(nuevoProducto); //ver consola y veremos la unión.