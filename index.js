const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 9001

const middleware = require(__dirname + '/modules/middleware.js')

app.set('view engine', 'ejs');
app.use(middleware);
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/index.html')
})

app.get('/tabla', (req, res) => {
  console.log(req.query);
  res.render(__dirname + '/views/tabla', {
    titulo1: 'hola',
    titulo2: 'adios',
    dato1: req.query.titulo1,
    dato2: req.query.dato1
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
