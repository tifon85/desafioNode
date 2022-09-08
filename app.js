const express = require('express');

const app = express();

const server = app.listen(8080, () => console.log("server up"))
server.on("error", error => console.log(`Error en servidor ${error}`))

app.get('/', (request, response) => {
    response.send("Hola mundo desde express")
})

app.get('/productos',(req,res)=>{
    res.send({productos: productos})
})

app.get('/productoRandom',(req,res)=>{
    res.send(productos.filter(item => item.id === (getRandomInt(3)+1)))
})