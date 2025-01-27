console.log("Iniciando...");

setTimeout(() => {
    console.log("Esto se muestra después de 3 segundos.");
}, 3000);

console.log("Finalizado.");

function cambiarFondo() {
    document.body.style.backgroundColor = 'lightblue';
    console.log("El color de fondo ha cambiado a azul claro.");
}

console.log("Espera 5 segundos para cambiar el fondo...");

setTimeout(cambiarFondo, 5000);