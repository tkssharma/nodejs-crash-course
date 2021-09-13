const express = require('express')
var bodyParser = require('body-parser')

// step-1
const app = express()
// create instance of express
const port = 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
// define the routes 
// HTTP GET /
app.get('/', (req, res) => {
  res.status(200).json({ message: 'all OK' })
})

// HTTP GET /:ID
app.get('/:id', (req, res) => {
  const id = req.params.id
  res.send('i are learning node js' + id);
})

app.get('/hello/:name', (req, res) => {
  const name = req.params.name
  res.send('we are learning node js' + name)
})

// HTTP POST
app.post('/hello', (req, res) => {
  console.log(req.body);
  const name = req.params.name
  res.send('we are learning node js' + name)
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


// TEXT/HTML AND JSON 
// /login ---> login content is coming from server 
// JSON SERVER REST APIS 
// SSR server side rendering ---rendering html from server 
