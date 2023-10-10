let vida = document.createElement('h2')
let container = document.querySelector('.container')
console.log(container);

let y = 'Yeffer is the bigets programmer'

let life = document.createTextNode(y)


container.append(vida)
vida.append(life, ' yeffer')
container.insertBefore(vida,h1)