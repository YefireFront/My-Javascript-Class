const http = require('http')

const server = http.createServer((req, res)=>{
    console.log("====> req (Solicitud)")
    console.log("====> req URL")
    console.log(req.url)
    console.log("====> req METHOD")
    console.log(req.method)
    console.log("====> req HEADERS")
    console.log(req.headers)    


});


const PORT = 3000
server.listen(PORT, ()=>{
    console.log(`Server rinning in port http://localhost:${PORT} `)
});