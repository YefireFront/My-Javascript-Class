// ============================================================
// 🛒 TALLER 2 — NBA Store (nivel: medio — dos listas y dinero)
// Novedad de este taller: botones DENTRO de los <li>, y un total
// calculado con reduce (tu práctica NBA). Sin soluciones.
// ============================================================

const productos = [
  { id: 1, nombre: "Jersey #23 Bulls",     precio: 120 },
  { id: 2, nombre: "Balón Wilson oficial", precio: 80 },
  { id: 3, nombre: "Zapatillas retro 97",  precio: 210 },
  { id: 4, nombre: "Gorra Lakers",         precio: 35 },
  { id: 5, nombre: "Poster Dream Team",    precio: 15 },
];

let carrito = []; // aquí van copias de los productos que se agreguen

// E1. Agarra #catalogo, #carrito y #total en constantes.

// E2. pintarCatalogo(): por cada producto crea un <li>. El texto va
//     en un <span> y al lado un botón "Agregar":
//       const span = document.createElement("span");
//       span.textContent = `${p.nombre} — $${p.precio}`;
//       const btn = document.createElement("button");
//       btn.textContent = "Agregar";
//       btn.dataset.id = p.id;        ← el tatuaje va EN EL BOTÓN
//       li.append(span, btn);         ← append acepta varios de una vez
//     (¿ves por qué elegimos append? armar esto con innerHTML + strings
//      sería un enredo de comillas)

// E3. Delegación en #catalogo: al hacer click, guarda con
//     if (evento.target.tagName !== "BUTTON") return;
//     lee el dataset.id del botón, busca el producto con find,
//     agrégalo al carrito con push... y pintarCarrito().

// E4. pintarCarrito(): igual que el catálogo pero cada <li> lleva un
//     botón "✖" con clase "quitar" (btn.classList.add("quitar")) y el
//     dataset.id del producto.

// E5. El total: dentro de pintarCarrito(), calcula con reduce la suma
//     de precios del carrito y escribe:  Total: $445
//     (total.textContent = ...)

// E6. Delegación en #carrito: click en "✖" → saca ESE producto del
//     carrito. Ojo: si agregaste 2 gorras, debe salir UNA, no las dos.
//     Pista: findIndex + splice(indice, 1)... o piénsalo con filter
//     y un id único por línea de carrito (Date.now() al agregar).
//     Elige tu camino y defiéndelo cuando me digas "r". 😏

// E7 (BONUS). Si el carrito está vacío, #carrito debe mostrar un <li>
//     que diga "Tu carrito está vacío" (sin botón).
