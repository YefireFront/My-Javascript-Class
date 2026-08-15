// ── Elementos ──────────────────────────────
const boton = document.querySelector("#btnJugadores");
const resultado = document.querySelector("#resultado");
const btnFichar = document.querySelector("#btnFichar");
const inpNombre = document.querySelector("#inpNombre");
const inpPosicion = document.querySelector("#inpPosicion");
const inpPuntos = document.querySelector("#inpPuntos");

// ── Funciones ──────────────────────────────

// Pide los jugadores al backend y los pinta en #resultado
async function cargarJugadores() {
    const respuesta = await fetch("http://localhost:3000/api/jugadores");
    const jugadores = await respuesta.json();

    resultado.replaceChildren();

    for (const j of jugadores) {
        const p = document.createElement("p");
        p.textContent = `${j.nombre} — ${j.posicion} · ${j.puntos} pts`;

        const btnEditar = document.createElement("button");
        btnEditar.textContent = "✏️";
        btnEditar.dataset.id = j.id;
        btnEditar.dataset.accion = "editar";
        p.append(btnEditar);

        const btn = document.createElement("button");
        btn.textContent = "✖";
        btn.dataset.id = j.id;
        btn.dataset.accion = "eliminar";
        p.append(btn);

        resultado.append(p);
    }
}

// Envía el jugador del formulario al backend y recarga la lista
async function ficharJugador() {
    const jugadorNuevo = {
        nombre: inpNombre.value,
        posicion: inpPosicion.value,
        puntos: Number(inpPuntos.value),
    };

    await fetch("http://localhost:3000/api/jugadores", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jugadorNuevo),
    });

    inpNombre.value = "";
    inpPosicion.value = "";
    inpPuntos.value = "";

    cargarJugadores();
}

async function eliminarJugador(evento) {
  if (evento.target.dataset.accion !== "eliminar") return;

  const id = evento.target.dataset.id;

  await fetch(`http://localhost:3000/api/jugadores/${id}`, {
    method: "DELETE",
  });

  cargarJugadores();
}

async function editarJugador(evento) {
  if (evento.target.dataset.accion !== "editar") return;

  const id = evento.target.dataset.id;

  const nuevosPuntos = prompt("Puntos nuevos:");
  if (nuevosPuntos === null) return;

  await fetch(`http://localhost:3000/api/jugadores/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ puntos: Number(nuevosPuntos) }),
  });

  cargarJugadores();
}

// ── Listeners ──────────────────────────────
boton.addEventListener("click", cargarJugadores);
btnFichar.addEventListener("click", ficharJugador);
resultado.addEventListener("click", eliminarJugador);
resultado.addEventListener("click", editarJugador);