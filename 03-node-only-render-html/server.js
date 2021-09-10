/*
/USERS HTTP GET -- GIVE ME A LIST OF USERS 
/ USERS HTTP POST -- ADD A NEW USER 
/ USER/:ID HTTP GET -- GET DATA OF A USER ONLY BASED ON ID 
/USER:ID HTTP DELETE -- DELETE DATA IF USER FROM SYSTEM 


CRUD
// GET USER 
// UPDATE USER 
// DELETE USER 
// INSERT USER 

/*
1. CLI Apps
2. REST APIs
3. Graphql APIs
4. Server side rendering (ejs/ pug)
*/
var bodyParser = require('body-parser')

const users = [
  {
    userId: 1,
    email: 'test@gmail.com'
  },
  {
    userId: 2,
    email: 'test-2@gmail.com'
  }
]
const express = require('express')
const app = express()
const port = 3000
// ============================//
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//==================================================//
app.get('/', (req, res) => res.send('Hello World!')) // HTTP GET /
// CRUD OPERATION 
// ROUTING IN EXPRESS 
// HTTP://LOCALGHOST:3000/USERS 
// LIST OF USERS
app.get('/users', (request, response) => {
  response.status(200).json(users)
})



// CRUD OPERATION 
// ROUTING IN EXPRESS 
// HTTP://LOCALGHOST:3000/USERS
// GET USER BY ID OR RETURN NULL 
app.get('/users/:userId', (request, response) => {
  const userId = request.params.userId;
  response.status(200).json(users.filter(i => i.userId === userId))
})

/*
app.get('/users/:userId/courses', (request, response) => {
  const userId = request.params;
  response.status(200).json(users.filter(i => i.userId === userId))
})

app.get('/users/:userId/courses/:courseId', (request, response) => {
  const userId = request.params;
  response.status(200).json(users.filter(i => i.userId === userId))
})
*/




// CRUD OPERATION 
// ROUTING IN EXPRESS 
// HTTP POST 
// HTTP://LOCALGHOST:3000/USERS
// GET USER BY ID OR RETURN NULL 
app.post('/users', (request, response) => {
  const payload = request.body;
  users.push(payload);
  response.status(200).json(users)
})


// CRUD OPERATION 
// ROUTING IN EXPRESS 
// HTTP DELETE 
// HTTP://LOCALGHOST:3000/USERS/:userId
// GET USER BY ID OR RETURN NULL 
app.delete('/users/:userId', (request, response) => {
  const userId = request.params.userId;
  const newCopy = users.filter(i => i.userId === userId)

  response.status(200).json(newCopy)
})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

