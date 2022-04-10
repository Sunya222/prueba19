// Funciones con parámetros y Argumentos

function sumar(numero1, numero2) { // numero1, 2 son parámetros
    console.log(numero1 + numero2);    
}

sumar(10, 5); // Argumentos o los valores reales
sumar(3, 3);
sumar(3, 6);
sumar(1, 2);


const sumar2 = function(n1, n2) {
    console.log(n1 + n2);
}
sumar2(5,10); 

// Parámetros por defaul // Es cuando llamamos una funciónn que no va atender los argumentos que se requieren, Ejemplo: Cuando llenamos nuestro perfil de facebook tal vez no llenamos todos los campos y esté caso usamos este  Parámetros por defaul. 
function sumar(numero1 = 0, numero2 = 0) { // numero1, 2 son parámetros
    console.log(numero1 + numero2);    
}

sumar(); // Supongamos que aquí no tenemos ningún argumento (Números entre paréntesis) en la consola nos mostrará el cero por defaul.
