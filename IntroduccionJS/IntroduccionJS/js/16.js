// Declaración de Función // Es importante saber que JS se ejecuta en dos etapas, la primera es de registro (creación) en ella se registran las funciones y en la segunda la de ejecución. (En ella se ejecuta el código).

function sumar(){
    console.log(10 + 10);
}

sumar()

// Expresión de Función // En este caso no es una función como tal, la toma como una variable y marca error en la consola. (Pregunta en entrevista de trabajo). Repasar esto mejor.

const sumar2 = function() {
    console.log(3+3);
}
sumar2();

//IIFE // Esta función no necesita llamarse ya que ella lo hace por si sola. Previenen que no se puedan acceder en otros archivos porque a veces descargamos alguna librería y estas tienen variable, funciones y pueden chocar con las que tenemos.
(function(){
    console.log('esto es una función')
})();