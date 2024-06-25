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


    // Another example
    const anotherPromise = new Promise((resolve, reject) => {
        // Perform some asynchronous task here, such as an API call or a read/write operation on disk.

        // If the task is completed successfully, call the resolve function with the result.
        resolve("The task was completed successfully!");

        // If an error occurs, call the reject function with the error reason.
        // reject("An error occurred while performing the task.");
    });

    // To use the promise, you can chain the then() and catch() methods.
    anotherPromise
        .then((result) => {
            console.log(result); // Prints "The task was completed successfully!"
        })
        .catch((error) => {
            console.error(error); // Prints "An error occurred while performing the task."
        });
        // Another practical example
        const fetchData = () => {
            return new Promise((resolve, reject) => {
                // Simulating an API call with a setTimeout
                setTimeout(() => {
                    const data = { name: "John", age: 30 };
                    resolve(data);
                    // Uncomment the line below to simulate an error
                    // reject("An error occurred while fetching data");
                }, 2000);
            });
        };

        fetchData()
            .then((data) => {
                console.log(data); // Prints { name: "John", age: 30 }
            })
            .catch((error) => {
                console.error(error); // Prints "An error occurred while fetching data"
            });