function obtenerUsuarios() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            if (!res.ok) {
                throw new Error(`Error HTTP: ${res.status}`);
            }
            return res.json();
        })
        .then(users => {
            users.forEach(user => {
                console.log(user.name);
            });
        })
        .catch(error => {
            console.error("Hubo un problema al obtener los usuarios:", error);
        });
}
    
async function obtenerUsuariosAsync() {
    try {
        const request = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!request.ok) {
            throw new Error(`Error HTTP: ${request.status}`);
        }
        
        const data = await request.json();
        data.forEach(user => {
            console.log(user.name);
        });
        
    } catch (error) {
        console.error("Hubo un problema al obtener los usuarios:", error);
    }
}
    
    
function getPostsbyID(id) {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
        if(!res.ok){
            throw new Error(`Error HTTP: ${res.status}`)
        }
        
        return res.json()
    })
    .then(data =>{
        data.forEach(post => {
            if(post.userId == id){
                // console.log(post)
                console.log(`ID: ${post.id} - Título: ${post.title}`);
            }
        })
    })
    .catch(err=>{
        console.error("Hubo un problema al obtener los usuarios:", err);
    })
    
}

async function getPostByID(id) {

    try {
        const request = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        
        if(!request.ok){
            throw new Error (`Error HTTP: ${request.status}`)
        }

        const data = await request.json()      
        data.forEach(post=>{
            if(id == post.userId){
                console.log(post)
            }
    })
        
    } catch (error) {
        console.error("Hubo un problema al obtener los usuarios:", error);
    }
    
    
}


function postsUser(idUser) {
    fetch(`https://jsonplaceholder.typicode.com/users/${idUser}`)
    .then(res =>{
        if(!res.ok){
            throw new Error (`Erro HTTP : ${res.status}`)
        }

        console.log(res)
        return res.json()
    })
    .then(data =>{
        console.log(data.name)
        return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${idUser}`)
    })
    .then(res => {
        if(!res.ok){
            throw new Error (`Erro HTTP : ${res.status}`)
        }

        return res.json()

    })
    .then(data =>{
        data.forEach(post=>{
            console.log(`${post.title}`)
        })
    })
    .catch(error =>{
        console.log(`hubo un error en la peticion ${error}`)
    })
}



async function asyncPostsUser(userID) {
    const requestUser = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
    const dataUsers = await requestUser.json()
    console.log(`EL usuario #${userID} es ${dataUsers.name}`)
    const requestPost = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`)
    const dataPost = await requestPost.json()
    dataPost.forEach(post=>{
        console.warn(`${post.title}`)
        console.log(`${post.body}`)
    })


    
}


function findUser(idUser){
    fetch(`https://jsonplaceholder.typicode.com/users/${idUser}`)
    
}

function getMultipleUsers([user1, user2, user3]) {

    Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/users/${user1}`),
        fetch(`https://jsonplaceholder.typicode.com/users/${user2}`),
        fetch(`https://jsonplaceholder.typicode.com/users/${user3}`),
    ])
    .then(response =>  Promise.all(response.map(res=> res.json())))
    .then(([user1, user2, user3])=>{
        console.log(`${user1.name}, -- ${user2} -- ${user3.name}`)
    })

}



// getMultipleUsers([2, 4, 6])


async function obtenerUsuarios([user1, user2, user3]) {
    const [res1, res2, res3] = await  Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/users/${user1}`),
        fetch(`https://jsonplaceholder.typicode.com/users/${user2}`),
        fetch(`https://jsonplaceholder.typicode.com/users/${user3}`),
    ])

}
