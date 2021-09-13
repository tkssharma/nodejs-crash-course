const express = require('express')
// step-1
const app = express()
// create instance of express
const port = 3000

// define the routes 
// HTTP GET /
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// HTTP GET /:ID
app.get('/id', (req, res) => {
  res.send('Hello World!')
})

// HTTP GET /STUDENT/:ID
app.get('/student/id', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  res.send('Hello World!')
})

app.put('/', (req, res) => {
  res.send('Hello World!')
})

app.delete('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


// TEXT/HTML AND JSON 
// /login ---> login content is coming from server 
// JSON SERVER REST APIS 
// SSR server side rendering ---rendering html from server 
