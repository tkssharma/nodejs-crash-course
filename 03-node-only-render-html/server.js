var http = require('http');
var fs = require('fs');

function onRequest(request, response) {
  // HTTP GET 
  // HTTP REQUEST PATH 
  response.writeHead(200, { 'Content-Type': 'text/html' });
  fs.readFile('./index.html', null, function (error, data) {
    if (error) {
      response.writeHead(404);
      response.write('File not found!');
    } else {
      response.write(data);
    }
    response.end();
  });
}

http.createServer(onRequest).listen(8000);

/*
1. CLI Apps
2. REST APIs
3. Graphql APIs
4. Server side rendering (ejs/ pug)
*/
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

