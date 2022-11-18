const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 9001

const middleware = require(__dirname + '/modules/middleware.js')

app.set('view engine', 'ejs');
app.use(middleware);
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/tabla', (req, res) => {
  console.log(req);
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
