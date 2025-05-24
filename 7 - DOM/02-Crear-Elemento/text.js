// Métodos Principales para Manipulación de Texto
// *textContent: Este es el método más directo para manipular el contenido de texto de un elemento. textContent devuelve todo el texto contenido en un elemento, incluyendo el texto de sus nodos hijos. Al asignar un nuevo valor a textContent, todo el contenido anterior se reemplaza.
// Ventajas: Es rápido, seguro (no interpreta HTML), y limpia cualquier HTML que haya dentro del elemento.
// Desventajas: No respeta el formato del HTML, como los saltos de línea o los estilos de los elementos hijos.

// *innerText: Similar a textContent, pero tiene en cuenta el estilo visual (CSS) del texto. Por ejemplo, innerText no devolverá texto que esté oculto con display: none.
// Ventajas: Respeta el estilo visual del texto, es útil si quieres leer o modificar solo el texto visible.
// Desventajas: Puede ser más lento que textContent, ya que requiere calcular los estilos visuales.

// *innerHTML: Este método no solo permite manipular el texto, sino que también permite incluir y modificar HTML. Al asignar un valor a innerHTML, puedes añadir contenido HTML dinámico, incluyendo etiquetas, atributos y nodos.
// Ventajas: Permite una manipulación más flexible del contenido, incluyendo la inserción de HTML.
// Desventajas: Potencialmente inseguro si el contenido proviene de entradas de usuario, ya que puede introducir vulnerabilidades XSS.

//* nodeValue: Este es un método más bajo a nivel de nodo, que permite manipular el valor de texto de un nodo de texto específico. Es menos común en el trabajo cotidiano con el DOM.
// Ventajas: Preciso para trabajar con nodos de texto específicos.
// Desventajas: No es tan conveniente como textContent o innerText para elementos completos.





const $parrafo = createelemenrt('p')

$parrafo.textContent = 'Hola Mundo'


console.log($parrafo.textContent) // si en el css -visibility:hidden; no se muestra
console.log($parrafo.innerText)
console.log($parrafo.innerHTML) // trae todo el html interno
console.log($parrafo.nodeValue)