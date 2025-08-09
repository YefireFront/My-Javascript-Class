//* Obtener partes de un string
// | Método                      | Qué hace                                          | Ejemplo                                  |
// | --------------------------- | ------------------------------------------------- | ---------------------------------------- |
// | `.charAt(i)`                | Devuelve el carácter en la posición `i`           | `"Hola".charAt(1)` → `"o"`               |
// | `.at(i)`                    | Similar a `charAt`, pero acepta índices negativos | `"Hola".at(-1)` → `"a"`                  |
// | `.slice(inicio, fin)`       | Devuelve parte de la cadena                       | `"JavaScript".slice(0,4)` → `"Java"`     |
// | `.substring(inicio, fin)`   | Similar a `slice` pero no acepta negativos        | `"JavaScript".substring(4)` → `"Script"` |
// | `.substr(inicio, longitud)` | Antiguo, evita usarse en código nuevo             | `"Hola".substr(1,2)` → `"ol"`            |

let texto = "JavaScript";

// charAt(i)
console.log(texto.charAt(4)); // "S"

// at(i)
console.log(texto.at(-1)); // "t" (último carácter)

// slice(inicio, fin)
console.log(texto.slice(0, 4)); // "Java"
console.log(texto.slice(4));    // "Script"

// substring(inicio, fin)
console.log(texto.substring(0, 4)); // "Java"

// substr(inicio, longitud) [obsoleto, pero aún funciona]
console.log(texto.substr(4, 6)); // "Script"



//*  Buscar dentro de un string

// | Método                | Qué hace                       | Ejemplo                                    |
// | --------------------- | ------------------------------ | ------------------------------------------ |
// | `.indexOf(texto)`     | Primera posición donde aparece | `"Hola mundo".indexOf("mundo")` → `5`      |
// | `.lastIndexOf(texto)` | Última posición donde aparece  | `"Hola Hola".lastIndexOf("Hola")` → `5`    |
// | `.includes(texto)`    | Devuelve `true` si lo contiene | `"JavaScript".includes("Script")` → `true` |
// | `.startsWith(texto)`  | Comprueba si empieza con...    | `"Hola".startsWith("Ho")` → `true`         |
// | `.endsWith(texto)`    | Comprueba si termina con...    | `"Hola".endsWith("la")` → `true`           |


let frase = "Hola mundo, bienvenido al mundo JS";

// indexOf
console.log(frase.indexOf("mundo")); // 5

// lastIndexOf
console.log(frase.lastIndexOf("mundo")); // 22

// includes
console.log(frase.includes("bienvenido")); // true

// startsWith
console.log(frase.startsWith("Hola")); // true

// endsWith
console.log(frase.endsWith("JS")); // true


//*  Modificar o limpiar texto

// | Método                           | Qué hace                          | Ejemplo                                             |
// | -------------------------------- | --------------------------------- | --------------------------------------------------- |
// | `.toUpperCase()`                 | Convierte a mayúsculas            | `"hola".toUpperCase()` → `"HOLA"`                   |
// | `.toLowerCase()`                 | Convierte a minúsculas            | `"HOLA".toLowerCase()` → `"hola"`                   |
// | `.trim()`                        | Quita espacios al inicio y final  | `"  Hola  ".trim()` → `"Hola"`                      |
// | `.trimStart()`                   | Quita solo al inicio              | `"  Hola".trimStart()` → `"Hola"`                   |
// | `.trimEnd()`                     | Quita solo al final               | `"Hola  ".trimEnd()` → `"Hola"`                     |
// | `.repeat(n)`                     | Repite el texto `n` veces         | `"JS".repeat(3)` → `"JSJSJS"`                       |
// | `.replace(buscar, reemplazo)`    | Reemplaza la primera coincidencia | `"Hola mundo".replace("mundo", "JS")` → `"Hola JS"` |
// | `.replaceAll(buscar, reemplazo)` | Reemplaza todas las coincidencias | `"a-a-a".replaceAll("a", "x")` → `"x-x-x"`          |



let palabra = "   Hola Mundo   ";

// toUpperCase
console.log(palabra.toUpperCase()); // "   HOLA MUNDO   "

// toLowerCase
console.log(palabra.toLowerCase()); // "   hola mundo   "

// trim
console.log(palabra.trim()); // "Hola Mundo"

// trimStart
console.log(palabra.trimStart()); // "Hola Mundo   "

// trimEnd
console.log(palabra.trimEnd()); // "   Hola Mundo"

// repeat
console.log("JS".repeat(3)); // "JSJSJS"

// replace
console.log("Perro grande".replace("Perro", "Gato")); // "Gato grande"

// replaceAll
console.log("a-a-a".replaceAll("a", "x")); // "x-x-x"





//* Dividir y unir texto

// | Método              | Qué hace             | Ejemplo                                    |
// | ------------------- | -------------------- | ------------------------------------------ |
// | `.split(separador)` | Divide en array      | `"a,b,c".split(",")` → `["a", "b", "c"]`   |
// | `.concat(cadena)`   | Une cadenas          | `"Hola".concat(" mundo")` → `"Hola mundo"` |
// | `+`                 | Forma rápida de unir | `"Hola " + "mundo"` → `"Hola mundo"`       |


// split
console.log("rojo,verde,azul".split(",")); // ["rojo", "verde", "azul"]

// concat
console.log("Hola".concat(" mundo")); // "Hola mundo"

// concatenación con +
console.log("Hola " + "mundo"); // "Hola mundo"
