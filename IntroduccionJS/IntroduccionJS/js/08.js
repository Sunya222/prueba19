const nombre = 'Juan';
const email = 'correo@correo.com';

// Concatenación (Código Viejo)
console.log("Nombre Cliente: " + nombre + "Email: " + email);

//Template Strings - Strings Literals (Código Nuevo) Nueva semántica pero es la misma concatenación.
console.log(`Nombre Cliente: ${nombre} Email: ${email}`);