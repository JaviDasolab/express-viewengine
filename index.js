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
  res.render(__dirname + '/views/tabla', req.query)
})

app.post('/tabla', (req, res) => {
  res.render(__dirname + '/views/tabla2', req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
