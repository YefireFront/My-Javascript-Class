

const $div = document.createElement('div');
const nuevoParrafo = document.createElement('p');
const nuevaImagen = document.createElement('img');
const nuevoEnlace = document.createElement('a');




const nuevaLista = document.createElement('ul');
for (let i = 1; i <= 3; i++) {
  const nuevoElementoLista = document.createElement('li');
  nuevoElementoLista.textContent = `Elemento ${i}`;
  nuevaLista.appendChild(nuevoElementoLista);
}

