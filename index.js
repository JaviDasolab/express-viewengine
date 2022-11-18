const express = require('express')

const app = express()
const port = 9001

const middleware = require(__dirname + '/modules/middleware.js')

app.set('view engine', 'ejs');
app.use(middleware);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
