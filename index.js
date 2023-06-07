const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) =>{
    res.send("Primer servidor!!")
})

app.get('/saludo', (req, res) =>{
    res.send("Hola, cómo están?")
})

app.get('/usuario/:nombre', (req, res) =>{
    console.log(req.params);
    res.send("Hola, "+req.params.nombre);
})

app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`)
})
