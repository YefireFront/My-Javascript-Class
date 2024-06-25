const myPromise = new Promise((resolve, reject) => {
    // Aquí puedes realizar alguna tarea asíncrona, como una llamada a una API o una operación de lectura/escritura en disco.

    // Si la tarea se completa exitosamente, llama a la función resolve con el resultado.
    resolve("¡La tarea se completó exitosamente!");

    // Si ocurre algún error, llama a la función reject con el motivo del error.
    // reject("Ocurrió un error al realizar la tarea.");
});

// Para utilizar la promesa, puedes encadenar los métodos then() y catch().
myPromise
    .then((result) => {
        console.log(result); // Imprime "¡La tarea se completó exitosamente!"
    })
    .catch((error) => {
        console.error(error); // Imprime "Ocurrió un error al realizar la tarea."
    });