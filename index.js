const express = require('express')

const app = express()
const port = 9001

const middleware = require(__dirname + '/modules/middleware.js')

app.set('view engine', 'ejs');
app.use(middleware);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/tabla', (req, res) => {
  // console.log(req.query.titulo1. req.query.titulo2, req.query.dato1, req.query.dato2);
  res.render(__dirname + '/views/tabla', {
    titulo1: 'hola',
    titulo2: 'adios',
    dato1: 'dato1',
    dato2: 'dato2'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
