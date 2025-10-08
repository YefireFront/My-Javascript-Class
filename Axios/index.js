function getUsar() {
    axios.get("https://jsonplaceholder.typicode.com/users", {
        params: {
            _limit: 5
        }
    })
    .then(res => {
        console.log(res.data);
    })
    .catch(err => {
        console.log(err);
    });
}

getUsar();


// con async y await
async function getUsarAsync() { 
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(res.data);
    }   catch (err) {       
        console.log(err);
    }
}

getUsarAsync(); 


function crateUsers() {
    axios.post('https://reqres.in/api/register', {
       data: {
        email: 'eve.htly@reqres.in',
        password: 'nuevoUsuario',
         }
    }).then(res => {
        console.log(res.data);
    })
    .catch(err => {
        console.log(err);
    });
}


crateUsers();


// actualizat coi put y pactyh 

function updateUser() {
    axios.put('https://reqres.in/api/users/2', {
        name: 'morpheus',
        job: 'zion resident'
    }).then(res => {
        console.log(res.data);
    })
    .catch(err => {
        console.log(err);
    }); 
}

updateUser();

function updateUserPatch() {
    axios.patch('https://reqres.in/api/users/2', {
        name: 'morpheus',
        job: 'zion resident'
    }).then(res => {
        console.log(res.data);
    })
    .catch(err => {
        console.log(err);
    }); 
}
updateUserPatch();


// delete

function deleteUser() { 
    axios.delete('https://reqres.in/api/users/2')
    .then(res => {
        console.log(res.data);
    })
    .catch(err => {
        console.log(err);
    });
}
deleteUser();