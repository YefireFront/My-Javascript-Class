//* Seleccion

let li = document.querySelector("body > div > ul > li")
let li2 = document.querySelector("body > div > ul > li:nth-child(2)")
let ul = li.parentElement


//*Removing
// li.remove()
// li2.remove()

//% Creating Magic

let a = document.createElement('a')
liJordan = document.createElement('li')
a.append('Michael Jordan')
liJordan.appendChild(a)


ul.replaceChild(liJordan, li2)