//* Numero de veces que se repite un numero en un array 

function VecesDeUnElemento (Lista) {         //Inicilaizamos la funcion, que recibe un array
    const ObjetoQueGuarda = {}               //Declaramos un Objeto 
    for (let i = 0; i < Lista.length; i++) { //Inicializamos un for que recorre el array que recibimos 
        const elemento = Lista[i];           // Creamos una constante que va almacenar cada valor de el array
        if(ObjetoQueGuarda[elemento]){ //Validamos si el objeto en la propiedad elemento es igual a 1; es decir si ya fue creada
            ObjetoQueGuarda[elemento]+=1;   // Sumamos 1 a el valor que tenga esa propiedad
        }else{
            ObjetoQueGuarda[elemento]=1;   // Creamos una propieda en el objeto con el nombre de la posicion de l array que esdta guardada en la constante elemento
        }
    }
    console.log(ObjetoQueGuarda); // Imprimimos el objeto
    console.log(Object.keys(ObjetoQueGuarda)); 
    console.log(Object.values(ObjetoQueGuarda)); 
    console.log(Object.entries(ObjetoQueGuarda)); 
    
}


VecesDeUnElemento([2,5,1,2,5,4])
