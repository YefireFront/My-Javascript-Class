// Ejemplo 1: Asignación básica (=)
let x = 5;
console.log('Ejemplo 1:', x); // 5

// Ejemplo 2: Asignación de adición (+=)
let y = 10;
y += 5; // equivalente a: y = y + 5
console.log('Ejemplo 2:', y); // 15

// Ejemplo 3: Asignación de sustracción (-=)
let z = 20;
z -= 8; // equivalente a: z = z - 8
console.log('Ejemplo 3:', z); // 12

// Ejemplo 4: Asignación de multiplicación (*=)
let a = 4;
a *= 3; // equivalente a: a = a * 3
console.log('Ejemplo 4:', a); // 12

// Ejemplo 5: Asignación de división (/=)
let b = 15;
b /= 3; // equivalente a: b = b / 3
console.log('Ejemplo 5:', b); // 5

// Ejemplo 6: Asignación de módulo (%=)
let c = 17;
c %= 5; // equivalente a: c = c % 5
console.log('Ejemplo 6:', c); // 2

// Ejemplo 7: Asignación de exponenciación (**=)
let d = 2;
d **= 3; // equivalente a: d = d ** 3
console.log('Ejemplo 7:', d); // 8

// Ejemplo 8: Asignación de desplazamiento a la izquierda (<<=)
let e = 5;
e <<= 2; // equivalente a: e = e << 2
console.log('Ejemplo 8:', e); // 20

// Ejemplo 9: Asignación de desplazamiento a la derecha (>>=)
let f = 20;
f >>= 2; // equivalente a: f = f >> 2
console.log('Ejemplo 9:', f); // 5

// Ejemplo 10: Asignación de desplazamiento a la derecha sin signo (>>>=)
let g = -20;
g >>>= 2; // equivalente a: g = g >>> 2
console.log('Ejemplo 10:', g); // 1073741819

// Ejemplo 11: Asignación AND bit a bit (&=)
let h = 5;
h &= 3; // equivalente a: h = h & 3
console.log('Ejemplo 11:', h); // 1

// Ejemplo 12: Asignación OR bit a bit (|=)
let i = 5;
i |= 3; // equivalente a: i = i | 3
console.log('Ejemplo 12:', i); // 7

// Ejemplo 13: Asignación XOR bit a bit (^=)
let j = 5;
j ^= 3; // equivalente a: j = j ^ 3
console.log('Ejemplo 13:', j); // 6

// Ejemplo 14: Asignación con operador de coalescencia nula (??=)
let k = null;
k ??= 10; // solo asigna si k es null o undefined
console.log('Ejemplo 14:', k); // 10

// Ejemplo 15: Asignación con operador AND lógico (&&=)
let l = 5;
l &&= 10; // asigna 10 solo si l es truthy
console.log('Ejemplo 15:', l); // 10

// Ejemplo 16: Asignación con operador OR lógico (||=)
let m = 0;
m ||= 10; // asigna 10 solo si m es falsy
console.log('Ejemplo 16:', m); // 10

// Ejemplo 17: Asignación múltiple
let n = 1, o = 2, p = 3;
console.log('Ejemplo 17:', n, o, p); // 1 2 3

// Ejemplo 18: Asignación con desestructuración
let [q, r] = [1, 2];
console.log('Ejemplo 18:', q, r); // 1 2

// Ejemplo 19: Asignación con operador de incremento
let s = 5;
s++; // equivalente a: s = s + 1
console.log('Ejemplo 19:', s); // 6

// Ejemplo 20: Asignación con operador de decremento
let t = 5;
t--; // equivalente a: t = t - 1
console.log('Ejemplo 20:', t); // 4 