//Estructuras de control. (Código condicional) Cuando uno va a un cajero a retirar dinero este le indica al usuario si tiene dinero o no. If te dice si cumples la condición te da una respuesta y si no te da otra. (else)
// const puntaje = 1000;
// if (puntaje !== 1000){
//     console.log ('No es igual')
// } else {
//     console.log('si el puntaje es 1000');
// }
    
// const efectivo = 1000;
// const carrito =800;

// if (efectivo > carrito) {
//     console.log ('El ususario puede pagar');
// } else {
//     console.log('Fondos insuficientes');
// }

//Aquí usamos tres códigos para tres respuestas distintas.

const rol = 'EDITOR';
if (rol === 'ADMINISTRADOR') {
    console.log('Acceso a todo el sistema');
} else if( rol ==='EDITOR') {
    console.log('Eres editor pero no puedes hacer mucho')
} else {
    console.log('No tienes acceso')
}

 
