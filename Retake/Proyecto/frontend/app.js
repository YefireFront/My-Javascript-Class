const boton = document.querySelector("#btnJugadores");
const resultado = document.querySelector("#resultado");

boton.addEventListener("click", async () => {

    const respuesta = await fetch("http://localhost:3000/api/jugadores");
    const jugadores = await respuesta.json();
    console.log(jugadores);

    resultado.replaceChildren();

    for (const j of jugadores) {

        const p = document.createElement("p");
        p.textContent = `${j.nombre} — ${j.posicion} · ${j.puntos} pts`;
        resultado.append(p);

    }

});