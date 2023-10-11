const arr = ['andre', 'daniel', 'camilo']

//* Selecting
let container = document.querySelector('.container')
let ul = document.querySelector('.ul')

//* Creating
let h2 = document.createElement('h2')
let h3 = document.createElement('h3')
let li = document.createElement('li')
let text = document.createTextNode('Yeffer is the bigets programmer')


//* Adding  

container.insertBefore(h3,ul)
container.append(h2)
h2.append(text)



arr.forEach(element => {
    let li = document.createElement('li')
    li.append(element)
    ul.append(li)
});