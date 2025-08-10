// 🎯 TALLER DE JAVASCRIPT - EJERCICIOS PRÁCTICOS
// ================================================
// Este archivo contiene ejercicios para practicar todos los conceptos
// de JavaScript que has estudiado hasta ahora.

console.log("🚀 ¡Bienvenido al Taller de JavaScript! 🚀\n");

// ================================================
// 🔹 SECCIÓN 1: VARIABLES, TIPOS DE DATOS Y OPERADORES
// ================================================

console.log("📚 SECCIÓN 1: Variables, Tipos de Datos y Operadores");
console.log("=" .repeat(60));

/* EJERCICIO 1: Calculadora de IMC
   Crea variables para peso (kg) y altura (m), calcula el IMC
   y muestra el resultado con un mensaje descriptivo.
   IMC = peso / (altura * altura)
*/

// Tu código aquí:
let peso = 70;
let altura = 1.75;
let imc = peso / (altura * altura);
console.log(`Tu IMC es: ${imc.toFixed(2)}`);

/* EJERCICIO 2: Conversor de Monedas
   Crea variables para cantidad en dólares, tasa de cambio a euros
   y calcula cuántos euros obtienes. Usa template literals.
*/

// Tu código aquí:
let dolares = 100;
let tasaCambio = 0.85;
let euros = dolares * tasaCambio;
console.log(`${dolares} dólares equivalen a ${euros} euros`);

/* EJERCICIO 3: Operadores de Asignación
   Crea una variable contador que inicie en 0 y usa operadores
   de asignación para incrementarla en 5, multiplicarla por 2
   y dividirla entre 2. Muestra cada paso.
*/

// Tu código aquí:
let contador = 0;
console.log(`Contador inicial: ${contador}`);
contador += 5;
console.log(`Después de sumar 5: ${contador}`);
contador *= 2;
console.log(`Después de multiplicar por 2: ${contador}`);
contador /= 2;
console.log(`Después de dividir entre 2: ${contador}`);

console.log("\n");

// ================================================
// 🔹 SECCIÓN 2: ESTRUCTURAS DE CONTROL
// ================================================

console.log("📚 SECCIÓN 2: Estructuras de Control");
console.log("=" .repeat(60));

/* EJERCICIO 4: Sistema de Calificaciones
   Crea una función que reciba una nota (0-100) y retorne:
   - "Excelente" si es 90-100
   - "Muy Bueno" si es 80-89
   - "Bueno" si es 70-79
   - "Regular" si es 60-69
   - "Reprobado" si es menor a 60
*/

function evaluarNota(nota) {
    if (nota >= 90 && nota <= 100) {
        return "Excelente";
    } else if (nota >= 80 && nota < 90) {
        return "Muy Bueno";
    } else if (nota >= 70 && nota < 80) {
        return "Bueno";
    } else if (nota >= 60 && nota < 70) {
        return "Regular";
    } else {
        return "Reprobado";
    }
}

console.log(`Nota 95: ${evaluarNota(95)}`);
console.log(`Nota 75: ${evaluarNota(75)}`);
console.log(`Nota 55: ${evaluarNota(55)}`);

/* EJERCICIO 5: Calculadora con Switch
   Crea una función que reciba dos números y una operación
   (+, -, *, /) y use switch para realizar el cálculo.
*/

function calculadora(num1, num2, operacion) {
    switch (operacion) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : "Error: División por cero";
        default:
            return "Operación no válida";
    }
}

console.log(`10 + 5 = ${calculadora(10, 5, '+')}`);
console.log(`10 - 5 = ${calculadora(10, 5, '-')}`);
console.log(`10 * 5 = ${calculadora(10, 5, '*')}`);
console.log(`10 / 5 = ${calculadora(10, 5, '/')}`);

/* EJERCICIO 6: Operador Ternario
   Crea una función que determine si una persona puede conducir
   basándose en su edad. Usa operador ternario.
*/

function puedeConducir(edad) {
    return edad >= 18 ? "Puede conducir" : "No puede conducir";
}

console.log(`Edad 20: ${puedeConducir(20)}`);
console.log(`Edad 16: ${puedeConducir(16)}`);

console.log("\n");

// ================================================
// 🔹 SECCIÓN 3: CICLOS Y BUCLES
// ================================================

console.log("📚 SECCIÓN 3: Ciclos y Bucles");
console.log("=" .repeat(60));

/* EJERCICIO 7: Patrón de Estrellas
   Usa un bucle for para crear este patrón:
   *
   **
   ***
   ****
   *****
*/

console.log("Patrón de estrellas:");
for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}

/* EJERCICIO 8: Números Primos
   Crea una función que encuentre todos los números primos
   del 1 al 50 usando bucles anidados.
*/

function esPrimo(numero) {
    if (numero < 2) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

function encontrarPrimos(limite) {
    let primos = [];
    for (let i = 2; i <= limite; i++) {
        if (esPrimo(i)) {
            primos.push(i);
        }
    }
    return primos;
}

console.log(`Números primos del 1 al 50: ${encontrarPrimos(50)}`);

/* EJERCICIO 9: Bucle While - Adivina el Número
   Crea un juego donde el usuario debe adivinar un número
   entre 1 y 100. Usa while para dar pistas.
*/

function juegoAdivinanza() {
    let numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let intentos = 0;
    let adivinado = false;
    
    console.log("🎮 Juego de Adivinanza - Número entre 1 y 100");
    
    while (!adivinado && intentos < 10) {
        intentos++;
        let intento = Math.floor(Math.random() * 100) + 1; // Simulamos intento
        
        if (intento === numeroSecreto) {
            console.log(`¡Correcto! El número era ${numeroSecreto} en ${intentos} intentos`);
            adivinado = true;
        } else if (intento < numeroSecreto) {
            console.log(`Intento ${intentos}: ${intento} es muy bajo`);
        } else {
            console.log(`Intento ${intentos}: ${intento} es muy alto`);
        }
    }
    
    if (!adivinado) {
        console.log(`Se acabaron los intentos. El número era ${numeroSecreto}`);
    }
}

juegoAdivinanza();

console.log("\n");

// ================================================
// 🔹 SECCIÓN 4: ARRAYS Y MÉTODOS
// ================================================

console.log("📚 SECCIÓN 4: Arrays y Métodos");
console.log("=" .repeat(60));

/* EJERCICIO 10: Gestión de Inventario
   Crea un array de productos con nombre, precio y stock.
   Usa métodos de array para filtrar, mapear y reducir.
*/

const inventario = [
    { nombre: "Laptop", precio: 1200, stock: 5 },
    { nombre: "Mouse", precio: 25, stock: 20 },
    { nombre: "Teclado", precio: 80, stock: 15 },
    { nombre: "Monitor", precio: 300, stock: 8 },
    { nombre: "Auriculares", precio: 60, stock: 12 }
];

// Filtrar productos con stock bajo (< 10)
const stockBajo = inventario.filter(producto => producto.stock < 10);
console.log("Productos con stock bajo:", stockBajo);

// Mapear para obtener solo nombres y precios
const nombresPrecios = inventario.map(producto => ({
    nombre: producto.nombre,
    precio: producto.precio
}));
console.log("Nombres y precios:", nombresPrecios);

// Calcular valor total del inventario
const valorTotal = inventario.reduce((total, producto) => 
    total + (producto.precio * producto.stock), 0);
console.log(`Valor total del inventario: $${valorTotal}`);

/* EJERCICIO 11: Manipulación de Arrays
   Crea un array de números y practica todos los métodos:
   push, pop, shift, unshift, splice, slice
*/

let numeros = [1, 2, 3, 4, 5];
console.log("Array original:", numeros);

numeros.push(6);
console.log("Después de push(6):", numeros);

numeros.unshift(0);
console.log("Después de unshift(0):", numeros);

let ultimo = numeros.pop();
console.log(`Pop: ${ultimo}, Array:`, numeros);

let primero = numeros.shift();
console.log(`Shift: ${primero}, Array:`, numeros);

numeros.splice(2, 1, 10);
console.log("Después de splice(2, 1, 10):", numeros);

let subArray = numeros.slice(1, 4);
console.log("Slice(1, 4):", subArray);

console.log("\n");

// ================================================
// 🔹 SECCIÓN 5: OBJETOS Y DESTRUCTURACIÓN
// ================================================

console.log("📚 SECCIÓN 5: Objetos y Destructuración");
console.log("=" .repeat(60));

/* EJERCICIO 12: Sistema de Usuarios
   Crea objetos de usuario con propiedades anidadas y
   practica destructuración y spread operator.
*/

const usuario1 = {
    id: 1,
    nombre: "Ana García",
    email: "ana@email.com",
    perfil: {
        edad: 28,
        ciudad: "Madrid",
        intereses: ["programación", "música", "viajes"]
    },
    activo: true
};

const usuario2 = {
    id: 2,
    nombre: "Carlos López",
    email: "carlos@email.com",
    perfil: {
        edad: 32,
        ciudad: "Barcelona",
        intereses: ["deportes", "cocina"]
    },
    activo: false
};

// Destructuración básica
const { nombre, email, activo } = usuario1;
console.log(`Usuario: ${nombre}, Email: ${email}, Activo: ${activo}`);

// Destructuración anidada
const { perfil: { edad, ciudad } } = usuario1;
console.log(`Edad: ${edad}, Ciudad: ${ciudad}`);

// Destructuración con alias
const { nombre: nombreUsuario, perfil: { edad: edadUsuario } } = usuario2;
console.log(`Usuario: ${nombreUsuario}, Edad: ${edadUsuario}`);

// Spread operator para combinar objetos
const usuarioCombinado = {
    ...usuario1,
    perfil: {
        ...usuario1.perfil,
        edad: 30
    }
};
console.log("Usuario combinado:", usuarioCombinado);

/* EJERCICIO 13: Métodos de Objeto
   Crea un objeto "Banco" con métodos para depositar,
   retirar y consultar saldo.
*/

const banco = {
    saldo: 1000,
    historial: [],
    
    depositar(cantidad) {
        if (cantidad > 0) {
            this.saldo += cantidad;
            this.historial.push({
                tipo: "Depósito",
                cantidad: cantidad,
                fecha: new Date().toLocaleDateString()
            });
            return `Depósito exitoso. Nuevo saldo: $${this.saldo}`;
        }
        return "Cantidad inválida";
    },
    
    retirar(cantidad) {
        if (cantidad > 0 && cantidad <= this.saldo) {
            this.saldo -= cantidad;
            this.historial.push({
                tipo: "Retiro",
                cantidad: cantidad,
                fecha: new Date().toLocaleDateString()
            });
            return `Retiro exitoso. Nuevo saldo: $${this.saldo}`;
        }
        return "Cantidad inválida o saldo insuficiente";
    },
    
    consultarSaldo() {
        return `Saldo actual: $${this.saldo}`;
    },
    
    verHistorial() {
        return this.historial;
    }
};

console.log(banco.consultarSaldo());
console.log(banco.depositar(500));
console.log(banco.retirar(200));
console.log("Historial:", banco.verHistorial());

console.log("\n");

// ================================================
// 🔹 SECCIÓN 6: FUNCIONES AVANZADAS
// ================================================

console.log("📚 SECCIÓN 6: Funciones Avanzadas");
console.log("=" .repeat(60));

/* EJERCICIO 14: Funciones de Orden Superior
   Crea funciones que reciban otras funciones como parámetros
   y funciones que retornen funciones.
*/

// Función que recibe una función como parámetro
function aplicarOperacion(numeros, operacion) {
    return numeros.map(operacion);
}

const duplicar = x => x * 2;
const cuadrado = x => x * x;
const raiz = x => Math.sqrt(x);

const numerosParaOperar = [1, 4, 9, 16, 25];
console.log("Números originales:", numerosParaOperar);
console.log("Duplicados:", aplicarOperacion(numerosParaOperar, duplicar));
console.log("Cuadrados:", aplicarOperacion(numerosParaOperar, cuadrado));
console.log("Raíces:", aplicarOperacion(numerosParaOperar, raiz));

// Función que retorna una función
function crearMultiplicador(factor) {
    return function(numero) {
        return numero * factor;
    };
}

const multiplicarPor3 = crearMultiplicador(3);
const multiplicarPor5 = crearMultiplicador(5);

console.log(`10 × 3 = ${multiplicarPor3(10)}`);
console.log(`10 × 5 = ${multiplicarPor5(10)}`);

/* EJERCICIO 15: Closure y Variables Privadas
   Crea un contador que mantenga su estado privado
   usando closure.
*/

function crearContador() {
    let contador = 0;
    
    return {
        incrementar: function() {
            contador++;
            return contador;
        },
        decrementar: function() {
            contador--;
            return contador;
        },
        obtenerValor: function() {
            return contador;
        },
        resetear: function() {
            contador = 0;
            return contador;
        }
    };
}

const miContador = crearContador();
console.log("Contador inicial:", miContador.obtenerValor());
console.log("Incrementar:", miContador.incrementar());
console.log("Incrementar:", miContador.incrementar());
console.log("Decrementar:", miContador.decrementar());
console.log("Valor actual:", miContador.obtenerValor());
console.log("Resetear:", miContador.resetear());

console.log("\n");

// ================================================
// 🔹 SECCIÓN 7: MANIPULACIÓN DEL DOM
// ================================================

console.log("📚 SECCIÓN 7: Manipulación del DOM");
console.log("=" .repeat(60));

/* EJERCICIO 16: Crear Elementos Dinámicamente
   Crea una función que genere una tabla HTML con datos
   de un array de objetos.
*/

function crearTablaHTML(datos) {
    if (!Array.isArray(datos) || datos.length === 0) {
        return "<p>No hay datos para mostrar</p>";
    }
    
    let tabla = "<table border='1' style='border-collapse: collapse; width: 100%;'>";
    
    // Encabezados
    tabla += "<thead><tr>";
    const encabezados = Object.keys(datos[0]);
    encabezados.forEach(encabezado => {
        tabla += `<th style='padding: 8px; background-color: #f2f2f2;'>${encabezado}</th>`;
    });
    tabla += "</tr></thead>";
    
    // Datos
    tabla += "<tbody>";
    datos.forEach(fila => {
        tabla += "<tr>";
        encabezados.forEach(encabezado => {
            tabla += `<td style='padding: 8px; text-align: center;'>${fila[encabezado]}</td>`;
        });
        tabla += "</tr>";
    });
    tabla += "</tbody></table>";
    
    return tabla;
}

const datosTabla = [
    { nombre: "Juan", edad: 25, ciudad: "Madrid" },
    { nombre: "María", edad: 30, ciudad: "Barcelona" },
    { nombre: "Pedro", edad: 28, ciudad: "Valencia" }
];

console.log("Tabla HTML generada:");
console.log(crearTablaHTML(datosTabla));

/* EJERCICIO 17: Sistema de Eventos Simulado
   Crea un objeto que simule un sistema de eventos
   con suscripción y emisión de eventos.
*/

class SistemaEventos {
    constructor() {
        this.eventos = {};
    }
    
    suscribir(evento, callback) {
        if (!this.eventos[evento]) {
            this.eventos[evento] = [];
        }
        this.eventos[evento].push(callback);
    }
    
    emitir(evento, datos) {
        if (this.eventos[evento]) {
            this.eventos[evento].forEach(callback => {
                callback(datos);
            });
        }
    }
    
    desuscribir(evento, callback) {
        if (this.eventos[evento]) {
            this.eventos[evento] = this.eventos[evento].filter(cb => cb !== callback);
        }
    }
}

const sistema = new SistemaEventos();

// Suscribirse a eventos
sistema.suscribir('usuarioLogin', (usuario) => {
    console.log(`🔐 Usuario logueado: ${usuario.nombre}`);
});

sistema.suscribir('usuarioLogout', (usuario) => {
    console.log(`🚪 Usuario deslogueado: ${usuario.nombre}`);
});

sistema.suscribir('nuevoMensaje', (mensaje) => {
    console.log(`💬 Nuevo mensaje: ${mensaje.texto}`);
});

// Emitir eventos
sistema.emitir('usuarioLogin', { nombre: 'Ana', id: 1 });
sistema.emitir('nuevoMensaje', { texto: '¡Hola mundo!', remitente: 'Ana' });
sistema.emitir('usuarioLogout', { nombre: 'Ana', id: 1 });

console.log("\n");

// ================================================
// 🔹 SECCIÓN 8: EJERCICIOS INTEGRADOS
// ================================================

console.log("📚 SECCIÓN 8: Ejercicios Integrados");
console.log("=" .repeat(60));

/* EJERCICIO 18: Sistema de Biblioteca
   Crea un sistema completo de biblioteca con libros,
   usuarios, préstamos y búsquedas.
*/

class Biblioteca {
    constructor() {
        this.libros = [];
        this.usuarios = [];
        this.prestamos = [];
    }
    
    agregarLibro(titulo, autor, genero, año) {
        const libro = {
            id: Date.now(),
            titulo,
            autor,
            genero,
            año,
            disponible: true
        };
        this.libros.push(libro);
        return libro;
    }
    
    registrarUsuario(nombre, email) {
        const usuario = {
            id: Date.now(),
            nombre,
            email,
            librosPrestados: []
        };
        this.usuarios.push(usuario);
        return usuario;
    }
    
    prestarLibro(libroId, usuarioId) {
        const libro = this.libros.find(l => l.id === libroId);
        const usuario = this.usuarios.find(u => u.id === usuarioId);
        
        if (!libro || !usuario) {
            return "Libro o usuario no encontrado";
        }
        
        if (!libro.disponible) {
            return "Libro no disponible";
        }
        
        libro.disponible = false;
        usuario.librosPrestados.push(libroId);
        
        const prestamo = {
            id: Date.now(),
            libroId,
            usuarioId,
            fechaPrestamo: new Date(),
            fechaDevolucion: null
        };
        
        this.prestamos.push(prestamo);
        return `Libro "${libro.titulo}" prestado a ${usuario.nombre}`;
    }
    
    devolverLibro(libroId, usuarioId) {
        const prestamo = this.prestamos.find(p => 
            p.libroId === libroId && p.usuarioId === usuarioId && !p.fechaDevolucion
        );
        
        if (!prestamo) {
            return "Préstamo no encontrado";
        }
        
        const libro = this.libros.find(l => l.id === libroId);
        const usuario = this.usuarios.find(u => u.id === usuarioId);
        
        libro.disponible = true;
        usuario.librosPrestados = usuario.librosPrestados.filter(id => id !== libroId);
        prestamo.fechaDevolucion = new Date();
        
        return `Libro "${libro.titulo}" devuelto por ${usuario.nombre}`;
    }
    
    buscarLibros(criterio) {
        return this.libros.filter(libro => 
            libro.titulo.toLowerCase().includes(criterio.toLowerCase()) ||
            libro.autor.toLowerCase().includes(criterio.toLowerCase()) ||
            libro.genero.toLowerCase().includes(criterio.toLowerCase())
        );
    }
    
    obtenerEstadisticas() {
        const totalLibros = this.libros.length;
        const librosDisponibles = this.libros.filter(l => l.disponible).length;
        const librosPrestados = totalLibros - librosDisponibles;
        const totalUsuarios = this.usuarios.length;
        const prestamosActivos = this.prestamos.filter(p => !p.fechaDevolucion).length;
        
        return {
            totalLibros,
            librosDisponibles,
            librosPrestados,
            totalUsuarios,
            prestamosActivos
        };
    }
}

// Crear y usar la biblioteca
const miBiblioteca = new Biblioteca();

// Agregar libros
miBiblioteca.agregarLibro("El Señor de los Anillos", "J.R.R. Tolkien", "Fantasía", 1954);
miBiblioteca.agregarLibro("1984", "George Orwell", "Ciencia Ficción", 1949);
miBiblioteca.agregarLibro("Don Quijote", "Miguel de Cervantes", "Novela", 1605);
miBiblioteca.agregarLibro("Cien años de soledad", "Gabriel García Márquez", "Realismo Mágico", 1967);

// Registrar usuarios
miBiblioteca.registrarUsuario("Carlos", "carlos@email.com");
miBiblioteca.registrarUsuario("Laura", "laura@email.com");

// Realizar préstamos
console.log(miBiblioteca.prestarLibro(1, 1));
console.log(miBiblioteca.prestarLibro(2, 2));

// Buscar libros
console.log("Libros de fantasía:", miBiblioteca.buscarLibros("fantasía"));

// Obtener estadísticas
console.log("Estadísticas de la biblioteca:", miBiblioteca.obtenerEstadisticas());

console.log("\n");

// ================================================
// 🔹 SECCIÓN 9: DESAFÍOS FINALES
// ================================================

console.log("📚 SECCIÓN 9: Desafíos Finales");
console.log("=" .repeat(60));

/* DESAFÍO 1: Generador de Contraseñas
   Crea una función que genere contraseñas seguras con
   diferentes criterios de complejidad.
*/

function generarContraseña(longitud = 12, incluirMayusculas = true, incluirNumeros = true, incluirSimbolos = true) {
    let caracteres = 'abcdefghijklmnopqrstuvwxyz';
    let contraseña = '';
    
    if (incluirMayusculas) caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (incluirNumeros) caracteres += '0123456789';
    if (incluirSimbolos) caracteres += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    // Asegurar que la contraseña tenga al menos un carácter de cada tipo seleccionado
    if (incluirMayusculas) contraseña += caracteres.match(/[A-Z]/)[0];
    if (incluirNumeros) contraseña += caracteres.match(/[0-9]/)[0];
    if (incluirSimbolos) contraseña += caracteres.match(/[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/)[0];
    
    // Completar el resto de la contraseña
    for (let i = contraseña.length; i < longitud; i++) {
        contraseña += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    
    // Mezclar la contraseña
    return contraseña.split('').sort(() => Math.random() - 0.5).join('');
}

console.log("Contraseña básica:", generarContraseña(8, false, false, false));
console.log("Contraseña segura:", generarContraseña(16, true, true, true));

/* DESAFÍO 2: Validador de Formularios
   Crea un sistema de validación para diferentes tipos
   de campos de formulario.
*/

const validador = {
    validarEmail: function(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    },
    
    validarTelefono: function(telefono) {
        const regex = /^[\+]?[1-9][\d]{0,15}$/;
        return regex.test(telefono.replace(/\s/g, ''));
    },
    
    validarDNI: function(dni) {
        const regex = /^\d{8}[A-Z]$/;
        if (!regex.test(dni)) return false;
        
        const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
        const numero = dni.substring(0, 8);
        const letra = dni.charAt(8);
        
        return letras.charAt(numero % 23) === letra;
    },
    
    validarTarjeta: function(numero) {
        const regex = /^\d{13,19}$/;
        if (!regex.test(numero.replace(/\s/g, ''))) return false;
        
        // Algoritmo de Luhn
        let suma = 0;
        let esPar = false;
        const numLimpio = numero.replace(/\s/g, '');
        
        for (let i = numLimpio.length - 1; i >= 0; i--) {
            let digito = parseInt(numLimpio.charAt(i));
            
            if (esPar) {
                digito *= 2;
                if (digito > 9) digito -= 9;
            }
            
            suma += digito;
            esPar = !esPar;
        }
        
        return suma % 10 === 0;
    }
};

// Probar validaciones
console.log("Validación de email:", validador.validarEmail("usuario@email.com"));
console.log("Validación de teléfono:", validador.validarTelefono("+34 123 456 789"));
console.log("Validación de DNI:", validador.validarDNI("12345678Z"));
console.log("Validación de tarjeta:", validador.validarTarjeta("4532015112830366"));

console.log("\n" + "=" .repeat(60));
console.log("🎉 ¡FELICITACIONES! Has completado el Taller de JavaScript");
console.log("💡 Practica estos ejercicios regularmente para dominar JavaScript");
console.log("🚀 ¡Sigue aprendiendo y construyendo proyectos increíbles!");
console.log("=" .repeat(60));
