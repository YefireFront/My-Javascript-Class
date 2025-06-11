// Ejemplo 1: Desestructuración básica
const persona = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Madrid'
};
const { nombre, edad, ciudad } = persona;
console.log('Ejemplo 1:', nombre, edad, ciudad); // Juan 30 Madrid

// Ejemplo 2: Renombrando propiedades
const usuario = {
    nombreUsuario: 'juanito123',
    emailUsuario: 'juan@email.com'
};
const { nombreUsuario: username, emailUsuario: email } = usuario;
console.log('Ejemplo 2:', username, email); // juanito123 juan@email.com

// Ejemplo 3: Valores por defecto
const { nombre2 = 'Anónimo', edad2 = 25 } = {};
console.log('Ejemplo 3:', nombre2, edad2); // Anónimo 25

// Ejemplo 4: Desestructuración anidada
const empleado = {
    nombre: 'María',
    direccion: {
        calle: 'Calle Principal',
        numero: 123,
        ciudad: 'Barcelona'
    }
};
const { nombre: nombreEmpleado, direccion: { calle, numero, ciudad: ciudadEmpleado } } = empleado;
console.log('Ejemplo 4:', nombreEmpleado, calle, numero, ciudadEmpleado);

// Ejemplo 5: Combinando renombrado y valores por defecto
const { nombre3 = 'Invitado', rol = 'usuario' } = { nombre3: 'Pedro' };
console.log('Ejemplo 5:', nombre3, rol); // Pedro usuario

// Ejemplo 6: Desestructuración en parámetros de función
function mostrarInfo({ nombre, edad, profesion = 'Desconocida' }) {
    console.log('Ejemplo 6:', `${nombre} tiene ${edad} años y es ${profesion}`);
}
mostrarInfo({ nombre: 'Ana', edad: 28 });

// Ejemplo 7: Desestructuración con el operador rest
const { nombre4, ...restoInfo } = {
    nombre4: 'Carlos',
    edad: 35,
    ciudad: 'Valencia',
    trabajo: 'Programador'
};
console.log('Ejemplo 7:', nombre4); // Carlos
console.log('Ejemplo 7:', restoInfo); // { edad: 35, ciudad: 'Valencia', trabajo: 'Programador' }

// Ejemplo 8: Desestructuración de objetos anidados con valores por defecto
const config = {
    servidor: {
        host: 'localhost'
    } 
};
const { servidor: { host, puerto = 3000 } } = config;
console.log('Ejemplo 8:', host, puerto); // localhost 3000

// Ejemplo 9: Desestructuración en un bucle for...of
const usuarios = [
    { id: 1, nombre: 'Luis' },
    { id: 2, nombre: 'Elena' }
];
for (const { id, nombre } of usuarios) {
    console.log('Ejemplo 9:', `Usuario ${id}: ${nombre}`);
}

// Ejemplo 10: Desestructuración con alias y valores por defecto
const { 
    nombre: nombreCompleto = 'Sin nombre',
    edad: años = 0,
    ...otrosDatos 
} = { nombre: 'Roberto' };
console.log('Ejemplo 10:', nombreCompleto, años, otrosDatos); 