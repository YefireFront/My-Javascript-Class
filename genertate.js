// Función asincrónica
async function asyncFunction() {
    try {
        // Simulación de una operación asincrónica que tarda 1 segundo
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log("Operación asincrónica completada");
    } catch (error) {
        console.error("Error en la operación asincrónica:", error);
    }
}

// Promesa
function promiseFunction() {
    return new Promise((resolve, reject) => {
        // Simulación de una operación asincrónica que tarda 1 segundo
        setTimeout(() => {
            console.log("Operación asincrónica completada");
            resolve();
        }, 1000);
    });
}

// Llamada a la función asincrónica
asyncFunction();

// Llamada a la promesa
promiseFunction()
    .then(() => {
        console.log("Promesa resuelta");
    })
    .catch(error => {
        console.error("Error en la promesa:", error);
    });



