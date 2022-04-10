// Funciones que retornan valores

function sumar(n1, n2) {
    return n1 + n2;
}

const resultado = sumar(2, 3);

console.log(resultado); // En esta función convocamos la suma, se produce un retorno (return)asignamos una variable (resultado) y nos hace la suma 2 + 3 = 5 (En la consola da 5)

// Vamos a poner un ejemplo de su uso con un carrito de compras que suma los artículos y añade el IVA.

let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}


function calcularImpuesto(total) {
    return 1.15 * total;
}


total = agregarCarrito(200);
total = agregarCarrito(600);
total = agregarCarrito(400);

console.log(total)

const totalAPagar = calcularImpuesto(total);

console.log(`El total a pagar con impuestos es de : $${totalAPagar}`); // Aquí le podemos colocar un templete string (texto con variables) En la consola nos sale esto: "El total a pagar con impuestos es de : $1380"



//https://www.udemy.com/course/desarrollo-web-completo-con-html5-css3-js-php-y-mysql/learn/lecture/24122496#notes