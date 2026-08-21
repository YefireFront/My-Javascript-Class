const express = require('express');
const app = express();



app.get('/', (req,res)=>{
    res.send('Hola Mundo');

})

app.get('/jugadores', (req,res)=>{
    res.send('aqui vamos a poner a los jugadores');
})




app.listen(3000,()=>{
    console.log('Estamos parchados en el puesto 3000');
}) 